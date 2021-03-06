/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, JobApplicant, JobOffering, User } from "@prisma/client";

export class JobApplicantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobApplicantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantFindManyArgs>
  ): Promise<number> {
    return this.prisma.jobApplicant.count(args);
  }

  async findMany<T extends Prisma.JobApplicantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantFindManyArgs>
  ): Promise<JobApplicant[]> {
    return this.prisma.jobApplicant.findMany(args);
  }
  async findOne<T extends Prisma.JobApplicantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantFindUniqueArgs>
  ): Promise<JobApplicant | null> {
    return this.prisma.jobApplicant.findUnique(args);
  }
  async create<T extends Prisma.JobApplicantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantCreateArgs>
  ): Promise<JobApplicant> {
    return this.prisma.jobApplicant.create<T>(args);
  }
  async update<T extends Prisma.JobApplicantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantUpdateArgs>
  ): Promise<JobApplicant> {
    return this.prisma.jobApplicant.update<T>(args);
  }
  async delete<T extends Prisma.JobApplicantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobApplicantDeleteArgs>
  ): Promise<JobApplicant> {
    return this.prisma.jobApplicant.delete(args);
  }

  async getJobOfferingId(parentId: string): Promise<JobOffering | null> {
    return this.prisma.jobApplicant
      .findUnique({
        where: { id: parentId },
      })
      .job_offering_id();
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.jobApplicant
      .findUnique({
        where: { id: parentId },
      })
      .user_id();
  }
}
