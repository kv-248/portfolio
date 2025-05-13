import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files directly from root
  app.use(express.static(path.join(process.cwd())));
  
  // Serve the index.html for the root route
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
