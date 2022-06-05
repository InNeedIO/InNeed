import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import {plainToClass} from "class-transformer";
import {Request} from "express";
import * as nestAccessControl from "nest-access-control";
import {ApiNestedQuery} from "../decorators/api-nested-query.decorator";
import * as errors from "../errors";
import {AclFilterResponseInterceptor} from "../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../interceptors/aclValidateRequest.interceptor";
import {JobOffering} from "./base/JobOffering";
import {JobOfferingCreateInput} from "./base/JobOfferingCreateInput";
import {JobOfferingFindManyArgs} from "./base/JobOfferingFindManyArgs";
import {JobOfferingWhereUniqueInput} from "./base/JobOfferingWhereUniqueInput";
import { JobOfferingService } from "./jobOffering.service";
import { JobOfferingControllerBase } from "./base/jobOffering.controller.base";

@swagger.ApiTags("jobOfferings")
@common.Controller("jobOfferings")
export class JobOfferingController extends JobOfferingControllerBase {
  constructor(
    protected readonly service: JobOfferingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobOffering })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
      @common.Body() data: JobOfferingCreateInput
  ): Promise<JobOffering> {
    return await this.service.create({
      data: {
        ...data,

        author_id: {
          connect: data.author_id,
        },
      },
      select: {
        author_id: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        city: true,
        description: true,
        id: true,
        max_salary: true,
        min_salary: true,
        position_level: true,
        title: true,
        working_mode: true,
      },
    });
  }


  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({type: [JobOffering]})
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobOfferingFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<JobOffering[]> {
    const args = plainToClass(JobOfferingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        author_id: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        city: true,
        description: true,
        id: true,
        max_salary: true,
        min_salary: true,
        position_level: true,
        title: true,
        working_mode: true,
      },
    });
  }


  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
      @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobOffering | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        author_id: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        city: true,
        description: true,
        id: true,
        max_salary: true,
        min_salary: true,
        position_level: true,
        title: true,
        working_mode: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }
}
