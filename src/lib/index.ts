declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "http:localhost:3000/api/course", method: "POST" } as const;
handleRequest(req.url, req.method);

// throw new Error("Not implemented");

class Fish {
  swim() {}
}

class Bear {
  climb() {}
}

function isFish(entity: Fish | Bear): entity is Fish {
  return typeof (entity as Fish).swim() !== "undefined";
}
