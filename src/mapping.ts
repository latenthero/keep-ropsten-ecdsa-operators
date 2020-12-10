import { UnbondedValueDeposited, KeepBonding } from '../generated/KeepBonding/KeepBonding'
import { Operator } from '../generated/schema'

export function handleUnbondedValueDeposited(event: UnbondedValueDeposited): void {
  let operator = new Operator(event.params.operator.toHexString())
  operator.address = event.params.operator
  let contract = KeepBonding.bind(event.address)
  operator.amount = contract.unbondedValue(event.params.operator)
  operator.save()
}
