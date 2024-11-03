import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";
import { APIResponse } from "~interfaces/api-res";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): string {
    return this.appService.ping();
  }

  @Get("/health")
  health(@Res() res: Response): Response<APIResponse<string>> {
    return res.status(HttpStatus.OK).json({
      message: "🚀 server up and running 🚀",
      data: new Date().toISOString(),
      status: 200,
    });
  }
}
