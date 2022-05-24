function asl(input) {
  const age = Number(input[0]);
  const gender = input[1];
  if (gender == "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  } else if (age >= 16) {
    console.log("Mr.");
  } else {
    console.log("Master");
  }
}
asl(["14", "f"]);

// •	"Mr." – мъж (пол 'm') на 16 или повече години
// •	"Master" – момче (пол 'm') под 16 години
// •	"Ms." – жена (пол 'f') на 16 или повече години
// •	"Miss" – момиче (пол 'f') под 16 години
