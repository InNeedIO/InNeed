import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NeedServiceBase } from "./base/need.service.base";

@Injectable()
export class NeedService extends NeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
