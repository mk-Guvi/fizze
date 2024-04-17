import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {
  searchParams?: Record<string, string | undefined>;
};


function ConnectionsPage(props: Props) {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="text-xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              connected={{}}
            //   connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ConnectionsPage;