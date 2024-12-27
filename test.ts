interface Config {
  endpoint: string;
  port: number;
  timeout?: number;
}

const config = {
  endpoint: "https://api.example.com",
  port: 8080,
  timeout: 3000,
} satisfies Config;


 enum SourceEnum {
   value1 = <any>"value1",
   value2 = <any>"value2",
 }
 


