import { Controller, Get, Headers, Query, Param, Post, Body, HttpException, HttpStatus, ForbiddenException, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { CreatePostDto } from './post.dto';
import { DemoService } from './providers/demo/demo.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly demoService: DemoService) {}

    @Get()
    index(@Headers() headers, @Query() query) {
        return this.demoService.findAll();
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id){
        console.log('id', typeof id);
        
        return {
            title: `Post ${id}`
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    store(@Body() post: CreatePostDto){
        // throw new ForbiddenException('没有权限！');
        this.demoService.create(post);
    }
}
