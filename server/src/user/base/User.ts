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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { HousingApplicant } from "../../housingApplicant/base/HousingApplicant";
import { Type } from "class-transformer";
import { HousingOffering } from "../../housingOffering/base/HousingOffering";
import { JobApplicant } from "../../jobApplicant/base/JobApplicant";
import { JobOffering } from "../../jobOffering/base/JobOffering";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  first_name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [HousingApplicant],
  })
  @ValidateNested()
  @Type(() => HousingApplicant)
  @IsOptional()
  housing_applicants?: Array<HousingApplicant>;

  @ApiProperty({
    required: false,
    type: () => [HousingOffering],
  })
  @ValidateNested()
  @Type(() => HousingOffering)
  @IsOptional()
  housing_offerings?: Array<HousingOffering>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [JobApplicant],
  })
  @ValidateNested()
  @Type(() => JobApplicant)
  @IsOptional()
  job_applicants?: Array<JobApplicant>;

  @ApiProperty({
    required: false,
    type: () => [JobOffering],
  })
  @ValidateNested()
  @Type(() => JobOffering)
  @IsOptional()
  job_offerings?: Array<JobOffering>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  last_name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephone_number!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };
