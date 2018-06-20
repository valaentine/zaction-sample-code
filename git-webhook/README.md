먼저 Slack에서 제공하는 수신용 webhook을 만든다. (아래 링크)

https://my.slack.com/services/new/incoming-webhook


webhook을 생성하면 webhook url이 생성되고 간단한 예시를 통해 테스트를 해볼 수 있다. 

Slack webhook을 사용하기 위해서는 반드시 두가지 사항을 지켜야 한다.

- Send a JSON string as the payload parameter in a POST request (payload parameter에는 적어도 'text' property는 꼭 있어야한다.)
- Send a JSON string as the body of a POST request
EX) 

```curl -X POST --data-urlencode "payload={\"channel\": \"#general\", \"username\": \"webhookbot\", \"text\": \"This is posted to #general and comes from a bot named webhookbot.\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/***```


Zaction Function 생성하기(Nodejs)

먼저 Zacion에서 함수를 생성한다. (언어: nodejs6 or nodejs8을 선택)

nodejs의 내장되어 있는 기본 모듈인 https 모듈로 작성
Slack webhook의 반드시 지켜야하는 포맷을 따라 코드를 작성

함수 코드를 작성 후 이 함수에 대한 API Endpoint를 생성해야한다.

구성정보 → Public or Private선택 → HTTP 메소드는 POST로 선택 → API 엔드포인트 사용 체크 → 저장 버튼
    

    Github에서 발신 webhook 설정하기


연동할 github 저장소에 접속.

setting → webhook → add webhook  버튼 클릭
Payload URL: 생성한 Zacion 함수의 API Endpoint (ex: https://api.dev.action.cloudz.co.kr/*** )
Content Type: JSON 선택
Secret: 빈칸
Which events would you like to trigger this webhook? : 트리거 선택은 자유(이 예제는 git push trigger 선택)


    해당 저장소에 git push → github trigger 발생 → Zaction 함수 호출 → Slack에 메세지 전달