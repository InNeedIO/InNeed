/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateJobApplicantArgs } from "./CreateJobApplicantArgs";
import { UpdateJobApplicantArgs } from "./UpdateJobApplicantArgs";
import { DeleteJobApplicantArgs } from "./DeleteJobApplicantArgs";
import { JobApplicantFindManyArgs } from "./JobApplicantFindManyArgs";
import { JobApplicantFindUniqueArgs } from "./JobApplicantFindUniqueArgs";
import { JobApplicant } from "./JobApplicant";
import { JobApplicantService } from "../jobApplicant.service";

@graphql.Resolver(() => JobApplicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobApplicantResolverBase {
  constructor(
    protected readonly service: JobApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async _jobApplicantsMeta(
    @graphql.Args() args: JobApplicantFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [JobApplicant])
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async jobApplicants(
    @graphql.Args() args: JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JobApplicant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "own",
  })
  async jobApplicant(
    @graphql.Args() args: JobApplicantFindUniqueArgs
  ): Promise<JobApplicant | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "create",
    possession: "any",
  })
  async createJobApplicant(
    @graphql.Args() args: CreateJobApplicantArgs
  ): Promise<JobApplicant> {
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "update",
    possession: "any",
  })
  async updateJobApplicant(
    @graphql.Args() args: UpdateJobApplicantArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<JobApplicant | null> {
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "delete",
    possession: "any",
  })
  async deleteJobApplicant(
    @graphql.Args() args: DeleteJobApplicantArgs
  ): Promise<JobApplicant | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
