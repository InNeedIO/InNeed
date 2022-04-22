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
import { IsString, IsOptional, IsBoolean, IsEnum } from "class-validator";
import { EnumNeedNeedType } from "./EnumNeedNeedType";
@InputType()
class NeedUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isOffer?: boolean;

  @ApiProperty({
    required: false,
    enum: EnumNeedNeedType,
  })
  @IsEnum(EnumNeedNeedType)
  @IsOptional()
  @Field(() => EnumNeedNeedType, {
    nullable: true,
  })
  needType?: "Home" | "Work";

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { NeedUpdateInput };
