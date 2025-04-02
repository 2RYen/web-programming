# # import random

# # def roll_dice():
# #     return random.randint(1, 6)  # 1에서 6 사이의 랜덤 숫자 생성

# # def play_game():
# #     print("주사위 게임에 오신 것을 환영합니다!")
    
# #     player_score = 0
# #     computer_score = 0
# #     rounds = int(input("몇 라운드 진행하시겠습니까? (1~10): "))
    
# #     # 라운드 진행
# #     for round_number in range(1, rounds + 1):
# #         print(f"\n--- {round_number}라운드 ---")
        
# #         # 플레이어 주사위 굴리기
# #         input("주사위를 굴리려면 Enter를 누르세요...")
# #         player_roll = roll_dice()
# #         print(f"플레이어의 주사위: {player_roll}")
        
# #         # 컴퓨터 주사위 굴리기
# #         computer_roll = roll_dice()
# #         print(f"컴퓨터의 주사위: {computer_roll}")
        
# #         # 승자 결정
# #         if player_roll > computer_roll:
# #             print("플레이어 승리!")
# #             player_score += 1
# #         elif player_roll < computer_roll:
# #             print("컴퓨터 승리!")
# #             computer_score += 1
# #         else:
# #             print("무승부!")

# #     # 최종 결과 출력
# #     print("\n--- 게임 종료 ---")
# #     print(f"플레이어 점수: {player_score}, 컴퓨터 점수: {computer_score}")
    
# #     if player_score > computer_score:
# #         print("최종 승자는 플레이어입니다!")
# #     elif player_score < computer_score:
# #         print("최종 승자는 컴퓨터입니다!")
# #     else:
# #         print("최종 결과는 무승부입니다!")

# # # 게임 실행
# # if __name__ == "__main__":
# #     play_game()

# # =========================================

# import random

# def start_game():
#     print("환영합니다! 야구 게임을 시작합니다!")
#     print("컴퓨터가 1부터 9까지의 숫자 3개를 선택합니다.")
    
#     # 컴퓨터가 랜덤 숫자 3개 선택 (중복되지 않음)
#     computer_numbers = random.sample(range(1, 10), 3)
#     attempts = 0
    
#     while True:
#         attempts += 1
#         user_input = input("3개의 숫자를 공백으로 구분하여 입력하세요 (1-9): ")
        
#         # 입력된 숫자 처리
#         user_numbers = user_input.split()
#         if len(user_numbers) != 3 or not all(num.isdigit() and 1 <= int(num) <= 9 for num in user_numbers):
#             print("잘못된 입력입니다. 다시 시도하세요.")
#             continue
        
#         user_numbers = [int(num) for num in user_numbers]
        
#         # 스트라이크와 볼 계산
#         strikes, balls = calculate_strikes_and_balls(computer_numbers, user_numbers)
        
#         print(f"{strikes} 스트라이크, {balls} 볼")
        
#         # 승리 조건
#         if strikes == 3:
#             print(f"축하합니다! {attempts}번의 시도 만에 맞추셨습니다!")
#             break

# def calculate_strikes_and_balls(computer_numbers, user_numbers):
#     strikes = sum(1 for i in range(3) if computer_numbers[i] == user_numbers[i])
#     balls = sum(1 for num in user_numbers if num in computer_numbers) - strikes
#     return strikes, balls

# # 게임 실행
# if __name__ == "__main__":
#     start_game()