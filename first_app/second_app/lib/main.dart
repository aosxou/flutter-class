import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.lightBlue),
      ),
      home: const MyHomePage(title: '플러터 데모 홈페이지!!'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});


  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
    
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
   
    return Scaffold(
      appBar: AppBar(
       
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: createBody4(),
    );
  }
}

Widget createBody() {
  //return Center(child: Column(children: [c1(),c1(),c1()])); // 가운데 정렬 및 3개 배치
  return Column(
    children: [
      Text('MainAxisAlignment.start'),
      c2(MainAxisAlignment.start),
      Text('MainAxisAlignment.center'),
      c2(MainAxisAlignment.center),
      Text('MainAxisAlignment.end'),
      c2(MainAxisAlignment.end),
      Text('MainAxisAlignment.spaceEvenly'),
      c2(MainAxisAlignment.spaceEvenly),
      Text('MainAxisAlignment.spaceAround'),
      c2(MainAxisAlignment.spaceAround),
      ],
  );
}


Widget c2(MainAxisAlignment mainAlig) {
    return Row(
      mainAxisAlignment: mainAlig,
      children : List.generate(5, (index) => Container(
      width: 40,
      height: 40,
      color: Colors.lightBlueAccent,
      margin: const EdgeInsets.all(5),
    ),
    ), 
  );
}
//body 가운데 정렬, 3개 세로로 배치


Widget createBody2() {
  //return Center(child: Column(children: [c1(),c1(),c1()])); // 가운데 정렬 및 3개 배치
  return Column(children: [c3(),c4(),c5()],);
}


Widget c3() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children : [
        Expanded(child: Container(
          height: 40,
          color: Colors.blueAccent,
          margin: const EdgeInsets.all(5),
        ),
         ),
      ],
    );
}

Widget createBlueContainer() {
    return Container(
      height: 40,
      color: Colors.lightBlue,
      margin: const EdgeInsets.all(5),
    );
}

Widget c4() {
    return Row(
      children : [
        Expanded(flex: 1, child: createBlueContainer()),
        Expanded(flex: 1, child: createBlueContainer()),
        Expanded(flex: 1, child: createBlueContainer()),
      ],
    );
}

Widget c5() {
    return Row(
      children : [
        Expanded(flex: 3, child: createBlueContainer()),
        Expanded(flex: 2, child: createBlueContainer()),
        Expanded(flex: 1, child: createBlueContainer()),
      ],
    );
}

Widget createBody3() {
  //return Center(child: Column(children: [c1(),c1(),c1()])); // 가운데 정렬 및 3개 배치
  return Center(
    child: Container(
    width: 300,
    height: 300,
    child: Column(
      children: [
          Expanded(
            flex: 1,
            child: Row(children: [
              Expanded(child: Container(color: Colors.blueGrey)),
              Expanded(child: Container(color: Colors.yellow)),
            ],
            ),
          ),
          Expanded(flex:1, child: Container(color: Colors.blue)),
    ],
    ),
    ),
  );
}

Widget CC(Color color) {
    return Container(
      color: color,
      decoration: BoxDecoration(color: Colors.red, border: Border.all(width:2)),
    );
}

Widget createBody4() {
  //return Center(child: Column(children: [c1(),c1(),c1()])); // 가운데 정렬 및 3개 배치
  return Center(
    child: Container(
    width: 300,
    height: 300,
    child: Column(
      children: [
              Expanded(flex: 1, child: CC(Colors.red)),
              Expanded(
              flex : 1,
              child: Row(
                children: [
                Expanded(flex:2, child: Container(color: Colors.orange)),
                Expanded(flex:1, child: Container(color: Colors.green)),
                Expanded(flex:1, child: Container(color: Colors.blue)),],
              ),
    ),
    ],
    ),
    ),
    );
}
//body 가운데 정렬, 3개 세로로 배치

