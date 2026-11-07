//* [...nextauth] is a Next.js catch-all route. It lets Auth.js handle several URLs automatically:

import { handlers } from "@/auth";

export const { GET, POST } = handlers;