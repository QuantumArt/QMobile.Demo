import {
  ControlsCollection,
  FormControl,
} from '@quantumart/mobx-form-validation-kit';
import { ITariffFilterGroup } from './tariffs-filters-group';

export interface FormTariffFilter extends ControlsCollection {
  group: FormControl<ITariffFilterGroup>;
  search: FormControl<string>;
}
