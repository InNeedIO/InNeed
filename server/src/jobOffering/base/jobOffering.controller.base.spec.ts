import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { JobOfferingController } from "../jobOffering.controller";
import { JobOfferingService } from "../jobOffering.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  max_salary: 42,
  min_salary: 42,
  position_level: "examplePositionLevel",
  title: "exampleTitle",
  working_mode: "exampleWorkingMode",
};
const CREATE_RESULT = {
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  max_salary: 42,
  min_salary: 42,
  position_level: "examplePositionLevel",
  title: "exampleTitle",
  working_mode: "exampleWorkingMode",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    description: "exampleDescription",
    id: "exampleId",
    max_salary: 42,
    min_salary: 42,
    position_level: "examplePositionLevel",
    title: "exampleTitle",
    working_mode: "exampleWorkingMode",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  max_salary: 42,
  min_salary: 42,
  position_level: "examplePositionLevel",
  title: "exampleTitle",
  working_mode: "exampleWorkingMode",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("JobOffering", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: JobOfferingService,
          useValue: service,
        },
      ],
      controllers: [JobOfferingController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /jobOfferings", async () => {
    await request(app.getHttpServer())
      .post("/jobOfferings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /jobOfferings", async () => {
    await request(app.getHttpServer())
      .get("/jobOfferings")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /jobOfferings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobOfferings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /jobOfferings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/jobOfferings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  afterAll(async () => {
    await app.close();
  });
});
