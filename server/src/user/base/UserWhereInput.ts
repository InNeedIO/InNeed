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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { HousingApplicantListRelationFilter } from "../../housingApplicant/base/HousingApplicantListRelationFilter";
import { HousingOfferingListRelationFilter } from "../../housingOffering/base/HousingOfferingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../../jobApplicant/base/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../../jobOffering/base/JobOfferingListRelationFilter";
@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  first_name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HousingApplicantListRelationFilter)
  @IsOptional()
  @Field(() => HousingApplicantListRelationFilter, {
    nullable: true,
  })
  housing_applicants?: HousingApplicantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HousingOfferingListRelationFilter)
  @IsOptional()
  @Field(() => HousingOfferingListRelationFilter, {
    nullable: true,
  })
  housing_offerings?: HousingOfferingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => JobApplicantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobApplicantListRelationFilter)
  @IsOptional()
  @Field(() => JobApplicantListRelationFilter, {
    nullable: true,
  })
  job_applicants?: JobApplicantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => JobOfferingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobOfferingListRelationFilter)
  @IsOptional()
  @Field(() => JobOfferingListRelationFilter, {
    nullable: true,
  })
  job_offerings?: JobOfferingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  last_name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  telephone_number?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}
export { UserWhereInput };
