import tkinter as tk
from tkinter import messagebox
import random

class NumberGuessingGame:
    def __init__(self, root):
        self.root = root
        self.root.title("숫자 맞추기 게임")
        self.root.geometry("300x200")

        # 게임 초기 설정
        self.max_number = 100
        self.max_attempts = 7
        self.correct_number = random.randint(1, self.max_number)
        self.attempts = 0

        # 난이도 선택을 위한 버튼
        self.difficulty_label = tk.Label(root, text="난이도를 선택하세요:")
        self.difficulty_label.pack(pady=5)

        self.easy_button = tk.Button(root, text="쉬움 (1-50)", command=self.set_easy)
        self.easy_button.pack(pady=5)

        self.medium_button = tk.Button(root, text="중간 (1-100)", command=self.set_medium)
        self.medium_button.pack(pady=5)

        self.hard_button = tk.Button(root, text="어려움 (1-200)", command=self.set_hard)
        self.hard_button.pack(pady=5)

        # 사용자 입력 및 확인 버튼
        self.entry_label = tk.Label(root, text="숫자를 입력하세요:")
        self.entry_label.pack(pady=5)

        self.entry = tk.Entry(root)
        self.entry.pack(pady=5)

        self.submit_button = tk.Button(root, text="확인", command=self.check_guess)
        self.submit_button.pack(pady=5)

        # 결과 메시지 출력
        self.result_label = tk.Label(root, text="")
        self.result_label.pack(pady=10)

    def set_easy(self):
        self.max_number = 50
        self.max_attempts = 10
        self.start_game()

    def set_medium(self):
        self.max_number = 100
        self.max_attempts = 7
        self.start_game()

    def set_hard(self):
        self.max_number = 200
        self.max_attempts = 5
        self.start_game()

    def start_game(self):
        self.correct_number = random.randint(1, self.max_number)
        self.attempts = 0
        self.result_label.config(text=f"게임이 시작되었습니다! (1-{self.max_number})")
        self.entry.delete(0, tk.END)

    def check_guess(self):
        try:
            user_guess = int(self.entry.get())
        except ValueError:
            messagebox.showerror("입력 오류", "숫자를 입력해주세요.")
            return

        self.attempts += 1

        if user_guess < self.correct_number:
            self.result_label.config(text="더 큰 숫자를 입력해보세요!")
        elif user_guess > self.correct_number:
            self.result_label.config(text="더 작은 숫자를 입력해보세요!")
        else:
            messagebox.showinfo("축하합니다!", f"정답입니다! {self.attempts}번 시도했습니다.")
            self.save_result(success=True)
            self.reset_game()
            return

        if self.attempts >= self.max_attempts:
            messagebox.showinfo("게임 오버", f"기회를 모두 사용했습니다. 정답은 {self.correct_number}였습니다.")
            self.save_result(success=False)
            self.reset_game()

    def reset_game(self):
        self.entry.delete(0, tk.END)
        self.result_label.config(text="새로운 게임이 시작되었습니다!")

    def save_result(self, success):
        with open("game_results.txt", "a") as file:
            result = "성공" if success else "실패"
            file.write(f"정답: {self.correct_number}, 시도 횟수: {self.attempts}, 난이도: {self.max_number}, {result}\n")

# 메인 윈도우 실행
root = tk.Tk()
game = NumberGuessingGame(root)
root.mainloop()