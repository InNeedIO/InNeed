/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { HousingApplicantWhereUniqueInput } from "../../housingApplicant/base/HousingApplicantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class HousingApplicantUpdateManyWithoutHousingOfferingsInput {
  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  connect?: Array<HousingApplicantWhereUniqueInput>;

  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  disconnect?: Array<HousingApplicantWhereUniqueInput>;

  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  set?: Array<HousingApplicantWhereUniqueInput>;
}
export { HousingApplicantUpdateManyWithoutHousingOfferingsInput };
