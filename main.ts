let 主角 = game.createSprite(2, 2)
let 目標 = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        主角.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    } else if (input.isGesture(Gesture.TiltRight)) {
        主角.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    } else if (input.isGesture(Gesture.LogoUp)) {
        主角.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    } else if (input.isGesture(Gesture.LogoDown)) {
        主角.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
basic.forever(function () {
    if (主角.isTouching(目標)) {
        game.addScore(1)
        主角.delete()
        目標.delete()
        主角 = game.createSprite(2, 2)
        目標 = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
