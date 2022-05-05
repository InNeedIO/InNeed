import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { HousingOfferingController } from "../housingOffering.controller";
import { HousingOfferingService } from "../housingOffering.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  author_id: 42,
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  price: 42,
  rooms_number: 42,
  size: 42.42,
  title: "exampleTitle",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  author_id: 42,
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  price: 42,
  rooms_number: 42,
  size: 42.42,
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    author_id: 42,
    city: "exampleCity",
    description: "exampleDescription",
    id: "exampleId",
    price: 42,
    rooms_number: 42,
    size: 42.42,
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  author_id: 42,
  city: "exampleCity",
  description: "exampleDescription",
  id: "exampleId",
  price: 42,
  rooms_number: 42,
  size: 42.42,
  title: "exampleTitle",
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

describe("HousingOffering", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HousingOfferingService,
          useValue: service,
        },
      ],
      controllers: [HousingOfferingController],
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

  test("POST /housingOfferings", async () => {
    await request(app.getHttpServer())
      .post("/housingOfferings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /housingOfferings", async () => {
    await request(app.getHttpServer())
      .get("/housingOfferings")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /housingOfferings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/housingOfferings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /housingOfferings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/housingOfferings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  afterAll(async () => {
    await app.close();
  });
});
