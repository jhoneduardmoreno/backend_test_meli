import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { OptionsDto } from './dto/options.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Query() options: OptionsDto) {
    return this.productsService.getProducts(options);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }
}
