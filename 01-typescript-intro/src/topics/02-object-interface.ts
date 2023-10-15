// const skills: string[] = ["bach","counter", "healing"];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ["bash", "counter"]
}

strider.hometown = "Rivendell";
console.table(strider);

export{};