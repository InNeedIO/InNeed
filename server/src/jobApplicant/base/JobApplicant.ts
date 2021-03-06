/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested } from "class-validator";
import { JobOffering } from "../../jobOffering/base/JobOffering";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
@ObjectType()
class JobApplicant {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => JobOffering,
  })
  @ValidateNested()
  @Type(() => JobOffering)
  job_offering_id?: JobOffering;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user_id?: User;
}
export { JobApplicant };
