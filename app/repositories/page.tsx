"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { repositories } from "@/lib/data/repositories";
import { Database, Plus, RefreshCw, Search } from "lucide-react";
import { useState } from "react";

export default function RepositoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:p-8">
      <div className="flex flex-col gap-4 p-4 border rounded-t-lg">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Repositories</h1>
            <p className="text-sm text-muted-foreground">
              {repositories.length} total repositories
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2 text-sm">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 md:flex-none"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                <span className="inline">Refresh All</span>
              </Button>
              <Button size="sm" className="flex-1 md:flex-none">
                <Plus className="h-4 w-4 mr-2" />
                <span className="inline">Add Repository</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center">
          <Search className="h-6 w-6 ml-3 text-muted-foreground absolute" />
          <Input
            placeholder="Search Repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-1/3 px-11"
          />
        </div>
      </div>

      <div className="grid rounded-b-lg overflow-hidden border-b">
        {filteredRepositories.map((repo) => (
          <Card key={repo.name} className="rounded-none hover:bg-muted">
            <CardHeader className="p-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-semibold hover:text-blue-500 cursor-pointer">
                    {repo.name}
                  </h2>
                  <Badge className="text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF] text-xs">
                    {/* {repo.visibility === "Public" ? (
                      <Globe className="h-3 w-3 mr-1" />
                    ) : (
                      <Lock className="h-3 w-3 mr-1" />
                    )} */}
                    {repo.visibility}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Updated {repo.updatedAt}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{repo.language}</span>
                  <div className={`w-2 h-2 rounded-full bg-blue-600`} />
                </div>
                <div className="text-sm text-muted-foreground">
                  <Database className="h-4 w-4 mr-1 inline-block" />
                  {repo.size}
                </div>
                <div className="text-sm text-muted-foreground">
                  Updated {repo.updatedAt}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
