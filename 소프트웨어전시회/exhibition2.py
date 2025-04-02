# # 필요한 라이브러리 설치
# # pip install chatterbot
# # pip install chatterbot_corpus

# from chatterbot import ChatBot
# from chatterbot.trainers import ChatterBotCorpusTrainer

# # 1. 챗봇 초기화
# chatbot = ChatBot('SimpleBot')

# # 2. 챗봇 학습기 설정 (한국어 데이터 학습)
# trainer = ChatterBotCorpusTrainer(chatbot)
# trainer.train("chatterbot.corpus.korean")

# # 3. 챗봇 동작
# print("안녕하세요! 챗봇과 대화해보세요. 종료하시려면 '종료'라고 입력하세요.")

# while True:
#     user_input = input("당신: ")
    
#     if user_input.lower() == '종료':
#         print("챗봇: 대화를 종료합니다. 안녕히 가세요!")
#         break
    
#     response = chatbot.get_response(user_input)
#     print(f"챗봇: {response}")
# -----------------------------------

import random

# 1. 단어 리스트 준비
word_list = ["야구", "코딩", "씨애랑", "소프트웨어학부", "VSCode", "baseball"]

# 2. 컴퓨터가 무작위로 단어 선택
chosen_word = random.choice(word_list)
word_length = len(chosen_word)

# 3. 게임 상태 초기화
guessed_word = ['_'] * word_length  # 맞춘 단어를 표시할 리스트
attempts_left = 6  # 틀릴 수 있는 기회
guessed_letters = []  # 이미 추측한 글자를 저장

# 4. 게임 시작 메시지
print("단어 추측 게임에 오신 것을 환영합니다!")
print(f"단어는 {word_length} 글자로 이루어져 있습니다.")
print(" ".join(guessed_word))

# 5. 게임 루프
while attempts_left > 0 and '_' in guessed_word:
    guess = input("추측할 글자를 입력하세요: ").lower()
    
    if len(guess) != 1 or not guess.isalpha():
        print("한 글자만 입력하세요.")
        continue
    
    if guess in guessed_letters:
        print("이미 추측한 글자입니다. 다른 글자를 입력하세요.")
        continue
    
    guessed_letters.append(guess)
    
    if guess in chosen_word:
        # 맞춘 글자가 있으면 해당 위치에 표시
        for index, letter in enumerate(chosen_word):
            if letter == guess:
                guessed_word[index] = guess
        print("정답입니다!")
    else:
        attempts_left -= 1
        print(f"틀렸습니다! 남은 기회: {attempts_left}")
    
    # 현재 상태 출력
    print(" ".join(guessed_word))

# 6. 게임 종료 메시지
if '_' not in guessed_word:
    print(f"축하합니다! 단어를 맞추셨습니다: {chosen_word}")
else:
    print(f"아쉽습니다! 기회를 모두 소진했습니다. 정답은 {chosen_word}였습니다.")