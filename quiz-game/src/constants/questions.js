// 소프트웨어 전공자용 게임 문제 데이터
export const questions = {
  normal: [
    // 자료구조 (10문제)
    {
      id: 1,
      category: '자료구조',
      difficulty: 'normal',
      question: '다음 중 Stack의 특징은?',
      options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'Random Access', '양방향 접근'],
      answer: 1,
      explanation: 'Stack은 후입선출(LIFO) 자료구조로, 가장 나중에 들어온 데이터가 먼저 나간다.'
    },
    {
      id: 2,
      category: '자료구조',
      difficulty: 'normal',
      question: '이진 탐색 트리(BST)의 시간복잡도는?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 1,
      explanation: '균형잡힌 BST의 탐색, 삽입, 삭제는 O(log n)의 시간복잡도를 가진다.'
    },
    {
      id: 3,
      category: '자료구조',
      difficulty: 'normal',
      question: 'Hash Table에서 collision 해결 방법이 아닌 것은?',
      options: ['Chaining', 'Open Addressing', 'Tree Mapping', 'Double Hashing'],
      answer: 2,
      explanation: 'Hash Table의 collision 해결 방법은 Chaining, Open Addressing, Double Hashing 등이다.'
    },
    {
      id: 4,
      category: '자료구조',
      difficulty: 'normal',
      question: '그래프의 인접 리스트 표현 시 공간복잡도는?',
      options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
      answer: 2,
      explanation: '그래프의 인접 리스트는 V개의 노드와 E개의 간선을 저장하므로 O(V + E) 공간이 필요하다.'
    },
    {
      id: 5,
      category: '자료구조',
      difficulty: 'normal',
      question: 'Linked List의 장점은?',
      options: ['빠른 접근', '메모리 효율성', '동적 메모리 할당', 'Cache 친화성'],
      answer: 2,
      explanation: 'Linked List는 동적 메모리 할당으로 크기를 유동적으로 조절할 수 있다.'
    },
    {
      id: 6,
      category: '자료구조',
      difficulty: 'normal',
      question: '최소 힙(Min Heap)에서 부모 노드는 항상?',
      options: ['자식보다 크다', '자식보다 작다', '자식과 같다', '비교 불가'],
      answer: 1,
      explanation: '최소 힙은 부모 노드가 항상 자식 노드보다 작은 값을 가진다.'
    },
    {
      id: 7,
      category: '자료구조',
      difficulty: 'normal',
      question: 'Red-Black Tree의 높이는?',
      options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(2ⁿ)'],
      answer: 1,
      explanation: 'Red-Black Tree는 자가 균형 이진 탐색 트리로 높이가 O(log n)이다.'
    },
    {
      id: 8,
      category: '자료구조',
      difficulty: 'normal',
      question: '트라이(Trie) 자료구조의 용도는?',
      options: ['정렬', '문자열 검색', '그래프 순회', '힙 정렬'],
      answer: 1,
      explanation: 'Trie는 문자열 검색, 자동완성, 사전 구현에 효율적인 자료구조이다.'
    },
    {
      id: 9,
      category: '자료구조',
      difficulty: 'normal',
      question: 'Disjoint Set Union(DSU)의 주요 연산은?',
      options: ['Find, Insert', 'Union, Find', 'Delete, Search', 'Sort, Merge'],
      answer: 1,
      explanation: 'DSU는 Union-Find 알고리즘으로 두 집합을 합치고(Union) 원소의 소속을 찾는다(Find).'
    },
    {
      id: 10,
      category: '자료구조',
      difficulty: 'normal',
      question: 'Array와 LinkedList 중 삽입이 O(1)인 것은?',
      options: ['Array (처음)', 'Array (끝)', 'LinkedList (처음)', '둘 다'],
      answer: 2,
      explanation: 'LinkedList는 처음에 삽입할 때 O(1)이지만, Array는 끝에만 O(1)이다 (포인터가 있을 때).'
    },

    // 알고리즘 (10문제)
    {
      id: 11,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'QuickSort의 평균 시간복잡도는?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      answer: 1,
      explanation: 'QuickSort의 평균 시간복잡도는 O(n log n)이고, 최악의 경우 O(n²)이다.'
    },
    {
      id: 12,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'Binary Search의 시간복잡도는?',
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'],
      answer: 1,
      explanation: 'Binary Search는 정렬된 배열에서 O(log n)의 시간복잡도로 원소를 찾는다.'
    },
    {
      id: 13,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'DFS는 주로 어떤 자료구조를 사용하는가?',
      options: ['Queue', 'Stack', 'Heap', 'Deque'],
      answer: 1,
      explanation: 'DFS(깊이 우선 탐색)는 Stack을 사용하여 구현한다.'
    },
    {
      id: 14,
      category: '알고리즘',
      difficulty: 'normal',
      question: '동적 프로그래밍의 기본 원칙은?',
      options: ['분할 정복', '최적 부분구조', '그리디', '백트래킹'],
      answer: 1,
      explanation: '동적 프로그래밍은 최적 부분구조와 중복되는 부분문제를 메모이제이션으로 해결한다.'
    },
    {
      id: 15,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'Dijkstra 알고리즘의 시간복잡도는?',
      options: ['O(V²)', 'O(E log V)', 'O(V log V)', 'O(V + E)'],
      answer: 1,
      explanation: 'Dijkstra 알고리즘은 우선순위 큐를 사용할 때 O(E log V) 시간복잡도를 가진다.'
    },
    {
      id: 16,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'BFS는 주로 어떤 자료구조를 사용하는가?',
      options: ['Stack', 'Queue', 'Heap', 'Tree'],
      answer: 1,
      explanation: 'BFS(너비 우선 탐색)는 Queue를 사용하여 구현한다.'
    },
    {
      id: 17,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'MergeSort의 시간복잡도는?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
      answer: 1,
      explanation: 'MergeSort는 최악의 경우에도 O(n log n)의 시간복잡도를 보장한다.'
    },
    {
      id: 18,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'Greedy 알고리즘의 특징은?',
      options: ['최적 해 보장', '현재 최선 선택', '완전 탐색', '재귀 사용'],
      answer: 1,
      explanation: 'Greedy 알고리즘은 각 단계에서 현재 최선의 선택을 하지만 전역 최적을 보장하지 않는다.'
    },
    {
      id: 19,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'Floyd-Warshall의 시간복잡도는?',
      options: ['O(V²)', 'O(V³)', 'O(E log V)', 'O(V + E)'],
      answer: 1,
      explanation: 'Floyd-Warshall은 모든 쌍의 최단경로를 구하며 O(V³) 시간복잡도를 가진다.'
    },
    {
      id: 20,
      category: '알고리즘',
      difficulty: 'normal',
      question: 'KMP 알고리즘은 무엇을 하는가?',
      options: ['정렬', '문자열 매칭', '최단경로', '그래프 순회'],
      answer: 1,
      explanation: 'KMP 알고리즘은 문자열 패턴 매칭을 O(n + m) 시간에 수행한다.'
    },

    // 코딩테스트 (10문제)
    {
      id: 21,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '다음 중 시간 복잡도가 가장 낮은 것은?',
      options: ['O(n²)', 'O(n log n)', 'O(2ⁿ)', 'O(n!)'],
      answer: 1,
      explanation: 'O(n log n) < O(n²) < O(2ⁿ) < O(n!) 순서로 증가한다.'
    },
    {
      id: 22,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '배열 크기가 10⁶일 때 적절한 시간복잡도는?',
      options: ['O(n²)', 'O(2ⁿ)', 'O(n log n)', 'O(n³)'],
      answer: 2,
      explanation: '10⁶ 크기에서는 O(n log n)까지 가능하지만 O(n²)는 10¹² 연산으로 너무 많다.'
    },
    {
      id: 23,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '다음 중 공간 복잡도를 고려할 때 가장 효율적인 것은?',
      options: ['O(n²)', 'O(n)', 'O(log n)', 'O(1)'],
      answer: 3,
      explanation: 'O(1)은 입력 크기에 관계없이 일정한 공간만 사용하므로 가장 효율적이다.'
    },
    {
      id: 24,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '에지 케이스에 해당하지 않는 것은?',
      options: ['빈 배열', '음수', '1개 원소', '중간 값'],
      answer: 3,
      explanation: '중간 값은 일반적인 경우이고, 빈 배열, 음수, 1개 원소는 에지 케이스이다.'
    },
    {
      id: 25,
      category: '코딩테스트',
      difficulty: 'normal',
      question: 'Two Pointer 기법의 이점은?',
      options: ['더 짧은 코드', '중첩 루프 제거', '더 깔끔한 구조', '메모리 절약'],
      answer: 1,
      explanation: 'Two Pointer는 정렬된 배열에서 중첩 루프를 피하고 O(n) 시간복잡도를 달성한다.'
    },
    {
      id: 26,
      category: '코딩테스트',
      difficulty: 'normal',
      question: 'Sliding Window 기법의 시간복잡도는?',
      options: ['O(n²)', 'O(n)', 'O(n log n)', 'O(2ⁿ)'],
      answer: 1,
      explanation: 'Sliding Window는 배열을 한 번만 순회하므로 O(n) 시간복잡도를 가진다.'
    },
    {
      id: 27,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '다음 중 재귀 함수의 단점은?',
      options: ['빠른 속도', '스택 오버플로우 위험', '간단한 코드', '메모리 효율'],
      answer: 1,
      explanation: '재귀는 함수 호출 스택을 쌓으므로 깊이가 깊으면 스택 오버플로우가 발생할 수 있다.'
    },
    {
      id: 28,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '메모이제이션의 주요 목적은?',
      options: ['코드 단축', '중복 계산 제거', '메모리 절약', '속도 저하'],
      answer: 1,
      explanation: '메모이제이션은 이전 계산 결과를 저장하여 중복 계산을 제거한다.'
    },
    {
      id: 29,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '백트래킹이 유용한 경우는?',
      options: ['정렬 문제', '완전 탐색', '최단경로', '그래프 문제'],
      answer: 1,
      explanation: '백트래킹은 순열, 조합, N-Queen 등 모든 경우를 탐색하는 문제에 유용하다.'
    },
    {
      id: 30,
      category: '코딩테스트',
      difficulty: 'normal',
      question: '다음 중 어떤 경우에 정렬이 필수인가?',
      options: ['모든 경우', '해당 없음', '이진 탐색 전', '백트래킹'],
      answer: 2,
      explanation: '이진 탐색은 정렬된 배열을 요구한다.'
    },

    // 시스템/네트워크 (10문제)
    {
      id: 31,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '프로세스와 스레드의 차이점은?',
      options: ['속도', '메모리 공유 여부', '저장소', '크기'],
      answer: 1,
      explanation: '프로세스는 독립적인 메모리를 가지지만 스레드는 같은 프로세스의 메모리를 공유한다.'
    },
    {
      id: 32,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: 'Context Switching의 오버헤드를 줄이는 방법은?',
      options: ['더 많은 프로세스', '스레드 사용', '더 많은 CPU', '메모리 추가'],
      answer: 1,
      explanation: '스레드는 메모리를 공유하므로 Context Switching 오버헤드가 프로세스보다 적다.'
    },
    {
      id: 33,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: 'TCP와 UDP의 차이점은?',
      options: ['속도', '신뢰성', '포트', '주소'],
      answer: 1,
      explanation: 'TCP는 신뢰성이 높지만 느리고, UDP는 빠르지만 신뢰성이 낮다.'
    },
    {
      id: 34,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: 'HTTP의 기본 포트는?',
      options: ['22', '80', '443', '8080'],
      answer: 1,
      explanation: 'HTTP는 포트 80을 사용하고, HTTPS는 포트 443을 사용한다.'
    },
    {
      id: 35,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '메모리 관리에서 가상 메모리의 역할은?',
      options: ['속도 향상', '용량 확장', '캐시', '캐시 해제'],
      answer: 1,
      explanation: '가상 메모리는 디스크를 이용해 실제 메모리보다 큰 주소 공간을 제공한다.'
    },
    {
      id: 36,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '데이터베이스 인덱싱의 장점은?',
      options: ['저장 공간 절약', '쿼리 속도 향상', '데이터 무결성', '동시성 개선'],
      answer: 1,
      explanation: '인덱싱은 검색 속도를 크게 향상시키지만 저장 공간과 업데이트 비용이 증가한다.'
    },
    {
      id: 37,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '캐시 메모리의 역할은?',
      options: ['오래된 데이터 저장', '빠른 접근', '대용량 저장', '영구 저장'],
      answer: 1,
      explanation: '캐시는 자주 사용되는 데이터를 빠르게 접근할 수 있도록 저장한다.'
    },
    {
      id: 38,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '해시(Hash) 함수의 특징은?',
      options: ['역함수 존재', '충돌 불가능', '일방향 함수', '순수 함수'],
      answer: 2,
      explanation: '해시는 같은 입력에 대해 항상 같은 출력을 하는 일방향 함수이다.'
    },
    {
      id: 39,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: '대칭 암호화와 비대칭 암호화의 차이는?',
      options: ['속도', '키 개수', '보안', '사용'],
      answer: 1,
      explanation: '대칭은 같은 키, 비대칭은 공개키와 개인키를 사용한다.'
    },
    {
      id: 40,
      category: '시스템/네트워크',
      difficulty: 'normal',
      question: 'REST API의 기본 HTTP 메서드는?',
      options: ['READ, WRITE', 'GET, POST, PUT, DELETE', 'REQUEST, RESPONSE', 'SEND, RECEIVE'],
      answer: 1,
      explanation: 'REST는 GET(조회), POST(생성), PUT(수정), DELETE(삭제) 메서드를 사용한다.'
    }
  ]
};

// easy와 hard 난이도도 동일한 문제로 사용 (임시)
export const questions_data = {
  easy: questions.normal,
  normal: questions.normal,
  hard: questions.normal
};

export const categories = ['자료구조', '알고리즘', '코딩테스트', '시스템/네트워크'];
export const difficulties = { easy: '쉬움', normal: '보통', hard: '어려움' };
