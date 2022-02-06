import { Prisma } from '@prisma/client';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.PostUncheckedCreateInput) {
    return this.prisma.post.create({
      data,
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  update(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      data,
      where,
    });
  }

  remove(where: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.delete({
      where,
    });
  }
}
