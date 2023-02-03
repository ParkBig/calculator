# Num Comparator

숫자를 입력하여 간단하게 합, 평균, 각각의 차를 쉽게 구하고, 그룹을 지어 비교할 수도 있습니다.

----
## Tech Stack

- typescript
- react-hook-form
- react-helmet-async
- victory
- zustand
- styled-components

----
### `주요 기능`

비교하고자 하는 수를 입력하면 즉시 입력된 수들의 합, 평균, 최대값, 최소값, 최대값 - 최소값, 최대값 - 평균값, 평균값 - 최소값을 알 수 있으며, 원형 그래프를 통해 시각적으로 파악 할 수 있습니다.
또한 그룹별로 최대 5개까지 각 비교 그룹을 만들고 그 그룹들을 전체 비교하여 앞서 말한 값을 구할 수 있습니다.

pwa를 적용하여 애플리케이션으로 사용가능하며, 인터넷 연결이 끊겨도 사용 할 수 있습니다.

----
### `시연 영상`

[유투브 시연영상 보기 클릭!](https://youtu.be/EFyhnMyDVec)

----

### `추후 업데이트 예정`

- USER 기능을 만들어 DB연동하여 각 유저가 Num Comparator 를 사용한 히스토리를 저장, 사용 할 수 있도록 함.
- Excel에 맞게 데이터 내보내기 가져오기 기능 구현.
- 클릭 한번으로 다양한 그래프를 통해 데이터 확인.