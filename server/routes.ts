import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the index.html for the root route
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });
  
  // Serve static files
  app.use('/css', express.static(path.join(process.cwd(), 'css')));
  app.use('/js', express.static(path.join(process.cwd(), 'js')));
  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));

  const httpServer = createServer(app);

  return httpServer;
}
