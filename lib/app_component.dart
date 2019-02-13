import 'package:angular/angular.dart';
import 'package:angular_forms/angular_forms.dart';

import 'src/book.dart';

@Component(
  selector: 'my-app',
  directives: [coreDirectives,formDirectives],
  templateUrl: 'app_component.html',
)
class AppComponent {
  final title='My Book Repository';
  Book book=Book(1, 'The Idiot');
}

