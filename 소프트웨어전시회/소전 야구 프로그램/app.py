from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 구단 데이터: 질문 결과에 따른 구단 추천
teams = {
    'KIA 타이거즈': {'image': '기아타이거즈.png', 'description': '도영아 니땀시 살어야'},
    '삼성 라이온즈': {'image': '삼성라이온즈.png', 'description': '최~강삼성 승리하리라~'},
    'LG 트윈스': {'image': '엘지트윈스.jpg', 'description': '엘지 왕조의 시작?!'},
    '두산 베어스': {'image': '두산베어스.jpg', 'description': '망곰과 망무리 투수 보유구단'},
    'SSG 랜더스': {'image': 'SSG랜더스.png', 'description': '최정랜더스'},
    'KT 위즈': {'image': 'KT위즈.jpg', 'description': '강철매직'},
    '롯데 자이언츠': {'image': '롯데자이언츠.jpg', 'description': '열광적인 팬들, 그리고 튼동님'},
    '한화 이글스': {'image': '한화이글스.jpg', 'description': '달을 뛰어넘어서 이제는 우주까지!'},
    'NC 다이노스': {'image': '엔씨다이노스.png', 'description': '손아섭, 박건우, 데이비슨 Let`s Go!'},
    '키움 히어로즈': {'image': '키움히어로즈.jpg', 'description': '강한 선수층을 자랑하는 구단!, 김하성을 이어 이제는 김혜성까지!'}
}

# 홈 페이지 (설문조사 폼)
@app.route('/')
def home():
    return render_template('index.html')

# 설문조사 결과 처리
@app.route('/result', methods=['POST'])
def result():
    # 설문조사 답변
    answers = request.form.getlist('answer')

    # 답변에 따른 구단 추천 로직 (여기선 랜덤으로 하나 추천하는 방식)
    # 간단하게 질문 3개를 기반으로 구단을 결정
    if '도영' in answers:
        recommended_team = 'KIA 타이거즈'
    elif '최강삼성' in answers:
        recommended_team = '삼성 라이온즈'
    elif '튼동' in answers:
        recommended_team = '롯데 자이언츠'
    else:
        recommended_team = '한화 이글스'  # 기본 추천 팀

    # 추천된 팀의 이미지와 설명을 전송
    team_info = teams[recommended_team]
    
    return render_template('result.html', team_name=recommended_team, team_image=team_info['image'], team_desc=team_info['description'])

if __name__ == '__main__':
    app.run(debug=True)