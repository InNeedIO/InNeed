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
import { HousingOfferingWhereUniqueInput } from "../../housingOffering/base/HousingOfferingWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class HousingApplicantWhereInput {
  @ApiProperty({
    required: false,
    type: () => HousingOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereUniqueInput)
  @IsOptional()
  @Field(() => HousingOfferingWhereUniqueInput, {
    nullable: true,
  })
  house_offeringI_id?: HousingOfferingWhereUniqueInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user_id?: UserWhereUniqueInput;
}
export { HousingApplicantWhereInput };
