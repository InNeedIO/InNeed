/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { HousingApplicantUpdateManyWithoutUsersInput } from "./HousingApplicantUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { HousingOfferingUpdateManyWithoutUsersInput } from "./HousingOfferingUpdateManyWithoutUsersInput";
import { JobApplicantUpdateManyWithoutUsersInput } from "./JobApplicantUpdateManyWithoutUsersInput";
import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  first_name?: string | null;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HousingApplicantUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  housing_applicants?: HousingApplicantUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HousingOfferingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  housing_offerings?: HousingOfferingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobApplicantUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobApplicantUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  job_applicants?: JobApplicantUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobOfferingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobOfferingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  job_offerings?: JobOfferingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  last_name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephone_number?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
