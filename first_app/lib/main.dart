import 'package:flutter/material.dart';

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
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
      ),
      home: const MyHomePage(title: '플러터 데모 홈페이지'),
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
      body: Center( child: buildbody2(), ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: '증가',
        child: const Icon(Icons.ads_click),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  Widget buildbody() {
    return Center(
      child : Container(
     padding: const EdgeInsets.only(left:20, right:20),
     width: 200,
     height: 50,
     color: Colors.blue,
     child: Center(child: Text('Container')),
    ),
    );
  }
    Widget buildbody2() {
    return Container(
     padding: const EdgeInsets.only(left:20, right:20),
     decoration: BoxDecoration(gradient: LinearGradient(
     colors: [Color.fromARGB(255, 255, 59, 98).withOpacity(0.7),
            Color.fromARGB(255, 255, 59, 98)
     ],
     begin: Alignment.topLeft,
     end: Alignment.bottomRight,
     ),
     borderRadius: BorderRadius.circular(10),
      boxShadow: [
        BoxShadow(
          color: Color.fromARGB(255, 255, 59, 98).withOpacity(0.3),
          spreadRadius: 5,
          blurRadius: 7,
          offset: const Offset(0, 3),
        ),
      ],
     ),
     width: 200,
     height: 150,
     child : Center(
      child: Text(
        'Container',
        style: TextStyle(color: Colors.white),
      ))
     );
  }
}
