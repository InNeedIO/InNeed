/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  HousingOffering,
  HousingApplicant,
  User,
} from "@prisma/client";

export class HousingOfferingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HousingOfferingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingFindManyArgs>
  ): Promise<number> {
    return this.prisma.housingOffering.count(args);
  }

  async findMany<T extends Prisma.HousingOfferingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingFindManyArgs>
  ): Promise<HousingOffering[]> {
    return this.prisma.housingOffering.findMany(args);
  }
  async findOne<T extends Prisma.HousingOfferingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingFindUniqueArgs>
  ): Promise<HousingOffering | null> {
    return this.prisma.housingOffering.findUnique(args);
  }
  async create<T extends Prisma.HousingOfferingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingCreateArgs>
  ): Promise<HousingOffering> {
    return this.prisma.housingOffering.create<T>(args);
  }
  async update<T extends Prisma.HousingOfferingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingUpdateArgs>
  ): Promise<HousingOffering> {
    return this.prisma.housingOffering.update<T>(args);
  }
  async delete<T extends Prisma.HousingOfferingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingOfferingDeleteArgs>
  ): Promise<HousingOffering> {
    return this.prisma.housingOffering.delete(args);
  }

  async findHousingApplicants(
    parentId: string,
    args: Prisma.HousingApplicantFindManyArgs
  ): Promise<HousingApplicant[]> {
    return this.prisma.housingOffering
      .findUnique({
        where: { id: parentId },
      })
      .housingApplicants(args);
  }

  async getAuthorId(parentId: string): Promise<User | null> {
    return this.prisma.housingOffering
      .findUnique({
        where: { id: parentId },
      })
      .author_id();
  }
}
