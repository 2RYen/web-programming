import tkinter as tk
from tkinter import colorchooser

class DrawingApp:
    def __init__(self, root):
        self.root = root
        self.root.title("단순한 그림 그리기 프로그램")

        self.canvas = tk.Canvas(root, bg="white", width=800, height=600)
        self.canvas.pack()

        self.color = "black"  # 기본 색상
        self.tool = "pen"      # 기본 도구
        self.last_x, self.last_y = None, None

        # 도구 선택 버튼
        self.create_tool_buttons()
        self.create_color_button()

        # 마우스 이벤트 바인딩
        self.canvas.bind("<Button-1>", self.mouse_click)
        self.canvas.bind("<B1-Motion>", self.mouse_drag)

    def create_tool_buttons(self):
        tool_frame = tk.Frame(self.root)
        tool_frame.pack()

        pen_button = tk.Button(tool_frame, text="펜", command=lambda: self.select_tool("pen"))
        pen_button.pack(side=tk.LEFT)

        rectangle_button = tk.Button(tool_frame, text="사각형", command=lambda: self.select_tool("rectangle"))
        rectangle_button.pack(side=tk.LEFT)

        oval_button = tk.Button(tool_frame, text="원", command=lambda: self.select_tool("oval"))
        oval_button.pack(side=tk.LEFT)

        eraser_button = tk.Button(tool_frame, text="지우개", command=lambda: self.select_tool("eraser"))
        eraser_button.pack(side=tk.LEFT)

    def create_color_button(self):
        color_button = tk.Button(self.root, text="색상 선택", command=self.select_color)
        color_button.pack()

    def select_tool(self, tool):
        self.tool = tool

    def select_color(self):
        self.color = colorchooser.askcolor()[1]  # 색상 선택 대화상자 열기

    def mouse_click(self, event):
        self.last_x, self.last_y = event.x, event.y

    def mouse_drag(self, event):
        if self.tool == "pen":
            self.canvas.create_line(self.last_x, self.last_y, event.x, event.y, fill=self.color, width=2)
        elif self.tool == "rectangle":
            self.canvas.create_rectangle(self.last_x, self.last_y, event.x, event.y, outline=self.color)
        elif self.tool == "oval":
            self.canvas.create_oval(self.last_x, self.last_y, event.x, event.y, outline=self.color)
        elif self.tool == "eraser":
            # 지우개 기능: 지우개 크기를 설정하여 해당 영역을 지움
            self.canvas.create_rectangle(event.x - 10, event.y - 10, event.x + 10, event.y + 10, fill="white", outline="white")

        self.last_x, self.last_y = event.x, event.y

# 프로그램 실행
if __name__ == "__main__":
    root = tk.Tk()
    app = DrawingApp(root)
    root.mainloop()



# =====================================
# import tkinter as tk

# # 1. 그림판을 위한 윈도우 생성
# window = tk.Tk()
# window.title("그림 그리기 프로그램")

# # 2. 그림판을 위한 캔버스 생성
# canvas = tk.Canvas(window, bg="white", width=600, height=400)
# canvas.pack()

# # 3. 마우스 이벤트를 처리하는 함수
# def draw(event):
#     x1, y1 = (event.x - 2), (event.y - 2)
#     x2, y2 = (event.x + 2), (event.y + 2)
#     canvas.create_oval(x1, y1, x2, y2, fill="black", outline="black")

# # 4. 마우스 왼쪽 버튼이 눌렸을 때 그림 그리기
# canvas.bind("<B1-Motion>", draw)

# # 5. 프로그램 실행
# window.mainloop()

# ------------------------------------------

# import tkinter as tk
# from tkinter import colorchooser

# class DrawingApp:
#     def __init__(self, root):
#         self.root = root
#         self.root.title("단순한 그림 그리기 프로그램")
        
#         self.canvas = tk.Canvas(root, bg="white", width=800, height=600)
#         self.canvas.pack()

#         self.color = "black"  # 기본 색상
#         self.tool = "pen"      # 기본 도구
#         self.last_x, self.last_y = None, None

#         # 도구 선택 버튼
#         self.create_tool_buttons()
#         self.create_color_button()

#         # 마우스 이벤트 바인딩
#         self.canvas.bind("<Button-1>", self.mouse_click)
#         self.canvas.bind("<B1-Motion>", self.mouse_drag)

#     def create_tool_buttons(self):
#         tool_frame = tk.Frame(self.root)
#         tool_frame.pack()

#         pen_button = tk.Button(tool_frame, text="펜", command=lambda: self.select_tool("pen"))
#         pen_button.pack(side=tk.LEFT)

#         rectangle_button = tk.Button(tool_frame, text="사각형", command=lambda: self.select_tool("rectangle"))
#         rectangle_button.pack(side=tk.LEFT)

#         oval_button = tk.Button(tool_frame, text="원", command=lambda: self.select_tool("oval"))
#         oval_button.pack(side=tk.LEFT)

#     def create_color_button(self):
#         color_button = tk.Button(self.root, text="색상 선택", command=self.select_color)
#         color_button.pack()

#     def select_tool(self, tool):
#         self.tool = tool

#     def select_color(self):
#         self.color = colorchooser.askcolor()[1]  # 색상 선택 대화상자 열기

#     def mouse_click(self, event):
#         self.last_x, self.last_y = event.x, event.y

#     def mouse_drag(self, event):
#         if self.tool == "pen":
#             self.canvas.create_line(self.last_x, self.last_y, event.x, event.y, fill=self.color, width=2)
#         elif self.tool == "rectangle":
#             self.canvas.create_rectangle(self.last_x, self.last_y, event.x, event.y, outline=self.color)
#         elif self.tool == "oval":
#             self.canvas.create_oval(self.last_x, self.last_y, event.x, event.y, outline=self.color)

#         self.last_x, self.last_y = event.x, event.y

# # 프로그램 실행
# if __name__ == "__main__":
#     root = tk.Tk()
#     app = DrawingApp(root)
#     root.mainloop()