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
import { ValidateNested, IsBoolean, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class HousingApplicantCreateInput {
  @ApiProperty({
    required: true,
    type: () => HousingOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereUniqueInput)
  @Field(() => HousingOfferingWhereUniqueInput)
  house_offeringI_id!: HousingOfferingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAccepted?: boolean | null;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user_id!: UserWhereUniqueInput;
}
export { HousingApplicantCreateInput };
