class feelings{
  love() {
    console.log('i love you')
  }
}
class man extends feelings{
  love() {
    console.log('man loves women')
  }
}
class woman extends feelings{
  love() {
    console.log('woman loves money')
  }
}

const feelingses = [new feelings, new man, new woman];
feelingses.forEach(feelings=>feelings.love())