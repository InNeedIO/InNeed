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
import { JobApplicantService } from "../jobApplicant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { JobApplicantCreateInput } from "./JobApplicantCreateInput";
import { JobApplicantWhereInput } from "./JobApplicantWhereInput";
import { JobApplicantWhereUniqueInput } from "./JobApplicantWhereUniqueInput";
import { JobApplicantFindManyArgs } from "./JobApplicantFindManyArgs";
import { JobApplicantUpdateInput } from "./JobApplicantUpdateInput";
import { JobApplicant } from "./JobApplicant";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobApplicantControllerBase {
  constructor(
    protected readonly service: JobApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobApplicant })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: JobApplicantCreateInput
  ): Promise<JobApplicant> {
    return await this.service.create({
      data: {
        ...data,

        job_offering_id: {
          connect: data.job_offering_id,
        },

        user_id: {
          connect: data.user_id,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [JobApplicant] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobApplicantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<JobApplicant[]> {
    const args = plainToClass(JobApplicantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobApplicantWhereUniqueInput
  ): Promise<JobApplicant | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobApplicantWhereUniqueInput,
    @common.Body() data: JobApplicantUpdateInput
  ): Promise<JobApplicant | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          job_offering_id: {
            connect: data.job_offering_id,
          },

          user_id: {
            connect: data.user_id,
          },
        },
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
    resource: "JobApplicant",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobApplicantWhereUniqueInput
  ): Promise<JobApplicant | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
