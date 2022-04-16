import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NeedResolverBase } from "./base/need.resolver.base";
import { Need } from "./base/Need";
import { NeedService } from "./need.service";

@graphql.Resolver(() => Need)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NeedResolver extends NeedResolverBase {
  constructor(
    protected readonly service: NeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
