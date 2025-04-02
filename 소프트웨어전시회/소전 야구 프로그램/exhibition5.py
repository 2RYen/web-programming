import tkinter as tk
from tkinter import messagebox

# 구단 데이터 (이름과 이미지 경로)
teams = {
    "KIA 타이거즈": "기아타이거즈.png",
    "삼성 라이온즈": "삼성라이온즈.png",
    "LG 트윈스": "엘지트윈스.jpg",
    "두산 베어스": "두산베어스.jpg",
    "SSG 랜더스": "SSG랜더스.png",
    "KT 위즈": "KT위즈.jpg",
    "롯데 자이언츠": "롯데자이언츠.jpg",
    "한화 이글스": "한화이글스.jpg",
    "NC 다이노스": "엔씨다이노스.png",
    "키움 히어로즈": "키움히어로즈.jpg",
}

def show_result():
    selected_team = team_var.get()
    if selected_team in teams:
        team_name = selected_team
        team_image_path = teams[team_name]
        
        # 결과 메시지 생성
        result_message = f"당신이 좋아하는 구단은 {team_name}입니다!"
        
        # 이미지 표시
        image_window = tk.Toplevel(window)
        image_window.title(team_name)
        
        # 결과 메시지 박스
        messagebox.showinfo("결과", result_message)
        
        # 이미지 표시
        team_image = tk.PhotoImage(file=team_image_path)
        image_label = tk.Label(image_window, image=team_image)
        image_label.img = team_image  # 이미지가 garbage collection에 의해 사라지지 않도록 참조를 유지
        image_label.pack()

# 메인 윈도우 생성
window = tk.Tk()
window.title("KBO 구단 추천 프로그램")

# 설문조사 질문
question_label = tk.Label(window, text="가장 좋아하는 구단을 선택하세요:")
question_label.pack()

# 선택 버튼 생성
team_var = tk.StringVar(value="")
for team in teams.keys():
    radio_button = tk.Radiobutton(window, text=team, variable=team_var, value=team)
    radio_button.pack(anchor=tk.W)

# 결과 보기 버튼
result_button = tk.Button(window, text="결과 보기", command=show_result)
result_button.pack()

# 메인 루프 시작
window.mainloop()