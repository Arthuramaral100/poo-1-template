import { table } from "console"

export class User {
    
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){}

        /**
         * getId - método para pegar o Id do objeto.
         */
        public getId(): string {
            return this.id
        }

        /**
         * setId - métod public seguro para alterar id do objeto
         */
        public setId(value: string): void {
            this.id = value
        }

        public getName(): string {
            return this.name
        }
        public setName(value: string): void {
            this.name = value
        }

        public getEmail(): string {
            return this.email
        }
        public setEmail(value: string): void {
            this.email = value
        }

        public getPassword(): string {
            return this.password
        }
        public setPassword(value: string): void {
            this.password = value
        }
        
        public getCreatedAt(): string {
            return this.createdAt
        }
        public setCreatedAt(value: string): void {
            this.createdAt = value
        }

}

const user = new User(
    "u003",
    "Astrodev",
    "atrodev@labenu.com",
    "astro123",
    "2023-01-30 10:04:45"
)

user.setId("u001")
console.table(user)


// id: string,
// name: string,
// email: string,
// password: string,
// createdAt: string