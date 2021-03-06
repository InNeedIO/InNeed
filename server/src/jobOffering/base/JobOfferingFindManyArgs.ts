/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobOfferingWhereInput } from "./JobOfferingWhereInput";
import { Type } from "class-transformer";
import { JobOfferingOrderByInput } from "./JobOfferingOrderByInput";

@ArgsType()
class JobOfferingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereInput,
  })
  @Field(() => JobOfferingWhereInput, { nullable: true })
  @Type(() => JobOfferingWhereInput)
  where?: JobOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: [JobOfferingOrderByInput],
  })
  @Field(() => [JobOfferingOrderByInput], { nullable: true })
  @Type(() => JobOfferingOrderByInput)
  orderBy?: Array<JobOfferingOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobOfferingFindManyArgs };
