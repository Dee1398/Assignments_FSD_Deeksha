let FavMovie = "Mom";

let guess = prompt('Guess movie name or you can quit');

while((guess !== FavMovie) && (guess !== 'quit'))
{
guess= prompt ('guess is wrong or try again')

}
if (guess == FavMovie){
    console.log('congrats movies is correct')
}