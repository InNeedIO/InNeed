import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NeedService } from "./need.service";
import { NeedControllerBase } from "./base/need.controller.base";

@swagger.ApiTags("needs")
@common.Controller("needs")
export class NeedController extends NeedControllerBase {
  constructor(
    protected readonly service: NeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
