import { OrderStatus } from '@prisma/client';
import { IsUUID, IsEnum } from 'class-validator';
import { OrdersStatusList } from '../enum/order.enum';

export class ChangeOrderStatusDto {
  @IsUUID('4')
  id: string;
  @IsEnum(OrdersStatusList, {
    message: `Valid status values are ${OrdersStatusList}`,
  })
  status: OrderStatus;
}
