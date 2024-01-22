import { IsString } from 'class-validator'

export class CreateBookDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly type: string

  @IsString()
  readonly arthur: string
}