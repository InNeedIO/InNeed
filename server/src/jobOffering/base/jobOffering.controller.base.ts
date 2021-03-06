/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { JobOfferingService } from "../jobOffering.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JobOfferingCreateInput } from "./JobOfferingCreateInput";
import { JobOfferingWhereInput } from "./JobOfferingWhereInput";
import { JobOfferingWhereUniqueInput } from "./JobOfferingWhereUniqueInput";
import { JobOfferingFindManyArgs } from "./JobOfferingFindManyArgs";
import { JobOfferingUpdateInput } from "./JobOfferingUpdateInput";
import { JobOffering } from "./JobOffering";
import { JobApplicantFindManyArgs } from "../../jobApplicant/base/JobApplicantFindManyArgs";
import { JobApplicant } from "../../jobApplicant/base/JobApplicant";
import { JobApplicantWhereUniqueInput } from "../../jobApplicant/base/JobApplicantWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobOfferingControllerBase {
  constructor(
    protected readonly service: JobOfferingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

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
  @swagger.ApiOkResponse({ type: [JobOffering] })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() data: JobOfferingUpdateInput
  ): Promise<JobOffering | null> {
    try {
      return await this.service.update({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobOffering | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          author_id: {
            select: {
              id: true,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/job_applicants")
  @ApiNestedQuery(JobApplicantFindManyArgs)
  async findManyJobApplicants(
    @common.Req() request: Request,
    @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobApplicant[]> {
    const query = plainToClass(JobApplicantFindManyArgs, request.query);
    const results = await this.service.findJobApplicants(params.id, {
      ...query,
      select: {
        id: true,

        job_offering_id: {
          select: {
            id: true,
          },
        },

        user_id: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/job_applicants")
  async connectJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      job_applicants: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/job_applicants")
  async updateJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      job_applicants: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/job_applicants")
  async disconnectJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      job_applicants: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
