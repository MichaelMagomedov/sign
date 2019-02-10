app.service('$contractUtils', [function () {
    return {
        decodeError: function (errorId) {
            
            switch (errorId) {
                case 'distributed_db.Operation_hash.fetch_canceled':
                    text = 'The fetch of a Operation_hash has been canceled';
                    break;
                case 'distributed_db.Operation_hash.fetch_timeout':
                    text = 'The fetch of a Operation_hash has timed out';
                    break;
                case 'distributed_db.Operation_hash.missing':
                    text = 'Some Operation_hash is missing from the distributed db';
                    break;
                case 'distributed_db.Protocol_hash.fetch_canceled':
                    text = 'The fetch of a Protocol_hash has been canceled';
                    break;
                case 'distributed_db.Protocol_hash.fetch_timeout':
                    text = 'The fetch of a Protocol_hash has timed out';
                    break;
                case 'distributed_db.Protocol_hash.missing':
                    text = 'Some Protocol_hash is missing from the distributed db';
                    break;
                case 'distributed_db.block_hash.fetch_canceled':
                    text = 'The fetch of a block_hash has been canceled';
                    break;
                case 'distributed_db.block_hash.fetch_timeout':
                    text = 'The fetch of a block_hash has timed out';
                    break;
                case 'distributed_db.block_hash.missing':
                    text = 'Some block_hash is missing from the distributed db';
                    break;
                case 'distributed_db.operation_hashes.fetch_canceled':
                    text = 'The fetch of a operation_hashes has been canceled';
                    break;
                case 'distributed_db.operation_hashes.fetch_timeout':
                    text = 'The fetch of a operation_hashes has timed out';
                    break;
                case 'distributed_db.operation_hashes.missing':
                    text = 'Some operation_hashes is missing from the distributed db';
                    break;
                case 'distributed_db.operations.fetch_canceled':
                    text = 'The fetch of a operations has been canceled';
                    break;
                case 'distributed_db.operations.fetch_timeout':
                    text = 'The fetch of a operations has timed out';
                    break;
                case 'distributed_db.operations.missing':
                    text = 'Some operations is missing from the distributed db';
                    break;
                case 'node.bootstrap_pipeline.invalid_locator':
                    text = 'Block locator is invalid.';
                    break;
                case 'node.p2p_io_scheduler.connection_closed':
                    text = 'IO error: connection with a peer is closed.';
                    break;
                case 'node.p2p_pool.connected':
                    text = 'Fail to connect with a peer: a connection is already established.';
                    break;
                case 'node.p2p_pool.connection_refused':
                    text = 'Connection was refused.';
                    break;
                case 'node.p2p_pool.peer_banned':
                    text = 'The peer identity you tried to connect is banned.';
                    break;
                case 'node.p2p_pool.pending_connection':
                    text = 'Fail to connect with a peer: a connection is already pending.';
                    break;
                case 'node.p2p_pool.point_banned':
                    text = 'The addr you tried to connect is banned.';
                    break;
                case 'node.p2p_pool.private_mode':
                    text = 'Node is in private mode.';
                    break;
                case 'node.p2p_pool.rejected':
                    text = 'Connection to peer was rejected.';
                    break;
                case 'node.p2p_pool.too_many_connections':
                    text = 'Too many connections.';
                    break;
                case 'node.p2p_socket.decipher_error':
                    text = 'An error occurred while deciphering.';
                    break;
                case 'node.p2p_socket.decoding_error':
                    text = 'An error occurred while decoding.';
                    break;
                case 'node.p2p_socket.encoding_error':
                    text = 'An error occurred while encoding.';
                    break;
                case 'node.p2p_socket.invalid_auth':
                    text = 'Rejected peer connection: invalid authentication.';
                    break;
                case 'node.p2p_socket.invalid_chunks_size':
                    text = 'Size of chunks is not valid.';
                    break;
                case 'node.p2p_socket.invalid_message_size':
                    text = 'The size of the message to be written is invalid.';
                    break;
                case 'node.p2p_socket.myself':
                    text = 'Remote peer is actually yourself.';
                    break;
                case 'node.p2p_socket.not_enough_proof_of_work':
                    text = 'Remote peer cannot be authenticated: not enough proof of work.';
                    break;
                case 'node.p2p_socket.rejected_socket_connection':
                    text = 'Rejected peer connection: rejected socket connection.';
                    break;
                case 'node.peer_validator.known_invalid':
                    text = 'Known invalid block found in the peer';
                    break;
                case 'node.peer_validator.unknown_ancestor':
                    text = 'Unknown ancestor block found in the peer';
                    break;
                case 'node.prevalidation.future_block_header':
                    text = 'The block was annotated with a time too far in the future.';
                    break;
                case 'node.prevalidation.oversized_operation':
                    text = 'The operation size is bigger than allowed.';
                    break;
                case 'node.prevalidation.parse_error':
                    text = 'Raised when an operation has not been parsed correctly during prevalidation.';
                    break;
                case 'node.prevalidation.too_many_operations':
                    text = 'The prevalidation context is full.';
                    break;
                case 'node.protocol_validator.invalid_protocol':
                    text = 'Invalid protocol.';
                    break;
                case 'node.state.bad_data_dir':
                    text = 'The data directory could not be read. This could be because it was generated with an old version of the tezos-node program. Deleting and regenerating this directory may fix the problem.';
                    break;
                case 'node.state.block.inconsistent_context_hash':
                    text = 'When commiting the context of a block, the announced context hash was not the one computed at commit time.';
                    break;
                case 'node.state.block_not_invalid':
                    text = 'The invalid block to be unmarked was not actually invalid.';
                    break;
                case 'node.state.unknown_chain':
                    text = 'The chain identifier could not be found in the chain identifiers table.';
                    break;
                case 'node.validator.checkpoint_error':
                    text = 'The block belongs to a branch that is not compatible with the current checkpoint.';
                    break;
                case 'node.validator.inactive_chain':
                    text = 'Attempted validation of a block from an inactive chain.';
                    break;
                case 'raw_store.unknown':
                    text = 'Missing key in store';
                    break;
                case 'validator.inconsistent_operations_hash':
                    text = 'The provided list of operations is inconsistent with the block header.';
                    break;
                case 'validator.invalid_block':
                    text = 'Invalid block.';
                    break;
                case 'validator.unavailable_protocol':
                    text = 'The protocol required for validating a block is missing.';
                    break;
                case 'worker.validator.block.closed':
                    text = 'An operation on a validator.block worker could not complete before it was shut down.';
                    break;
                case 'worker.validator.chain.closed':
                    text = 'An operation on a validator.chain worker could not complete before it was shut down.';
                    break;
                case 'worker.validator.peer.closed':
                    text = 'An operation on a validator.peer worker could not complete before it was shut down.';
                    break;
                case 'micheline.parse_error.annotation_exceeds_max_length':
                    text = 'While parsing a piece of Micheline source, an annotation exceeded the maximum length (255).';
                    break;
                case 'micheline.parse_error.empty_expression':
                    text = 'Tried to interpret an empty piece or Micheline source as a single expression.';
                    break;
                case 'micheline.parse_error.extra_token':
                    text = 'While parsing a piece of Micheline source, an extra semi colon or parenthesis was encountered.';
                    break;
                case 'micheline.parse_error.invalid_utf8_sequence':
                    text = 'While parsing a piece of Micheline source, a sequence of bytes that is not valid UTF-8 was encountered.';
                    break;
                case 'micheline.parse_error.misaligned_node':
                    text = 'While parsing a piece of Micheline source, an expression was not aligned with its siblings of the same mother application or sequence.';
                    break;
                case 'micheline.parse_error.missing_break_after_number':
                    text = 'While parsing a piece of Micheline source, a number was not visually separated from its follower token, leading to misreadability.';
                    break;
                case 'micheline.parse_error.odd_lengthed_bytes':
                    text = 'While parsing a piece of Micheline source, the length of a byte sequence (0x...) was not a multiple of two, leaving a trailing half byte.';
                    break;
                case 'micheline.parse_error.unclosed_token':
                    text = 'While parsing a piece of Micheline source, a parenthesis or a brace was unclosed.';
                    break;
                case 'micheline.parse_error.undefined_escape_sequence':
                    text = 'While parsing a piece of Micheline source, an unexpected escape sequence was encountered in a string.';
                    break;
                case 'micheline.parse_error.unexpected_character':
                    text = 'While parsing a piece of Micheline source, an unexpected character was encountered.';
                    break;
                case 'micheline.parse_error.unexpected_token':
                    text = 'While parsing a piece of Micheline source, an unexpected token was encountered.';
                    break;
                case 'micheline.parse_error.unterminated_comment':
                    text = 'While parsing a piece of Micheline source, a commentX was not terminated.';
                    break;
                case 'micheline.parse_error.unterminated_integer':
                    text = 'While parsing a piece of Micheline source, an integer was not terminated.';
                    break;
                case 'micheline.parse_error.unterminated_string':
                    text = 'While parsing a piece of Micheline source, a string was not terminated.';
                    break;
                case 'rpc_client.request_failed':
                    text = '';
                    break;
                case 'RPC_context.Not_found':
                    text = 'RPC lookup failed. No RPC exists at the URL or the RPC tried to access non-existent data.';
                    break;
                case 'cli.key.invalid_uri':
                    text = 'A key has been provided with an invalid uri.';
                    break;
                case 'cli.signature_mismatch':
                    text = 'The signer produced an invalid signature';
                    break;
                case 'cli.unregistered_key_scheme':
                    text = 'A key has been provided with an unregistered scheme (no corresponding plugin)';
                    break;
                case 'client.003-PsddFKi3.badEndorsementDelayArg':
                    text = 'invalid duration in -endorsement-delay';
                    break;
                case 'client.003-PsddFKi3.badMaxPriorityArg':
                    text = 'invalid priority in -max-priority';
                    break;
                case 'client.003-PsddFKi3.badMaxWaitingTimeArg':
                    text = 'invalid duration in -max-waiting-time';
                    break;
                case 'client.003-PsddFKi3.badMinimalFeesArg':
                    text = 'invalid fee threshold in -fee-threshold';
                    break;
                case 'client.003-PsddFKi3.badPreservedLevelsArg':
                    text = 'invalid number of levels in -preserved-levels';
                    break;
                case 'client.003-PsddFKi3.badTezArg':
                    text = 'Invalid ꜩ notation in parameter.';
                    break;
                case 'client.003-PsddFKi3.michelson.macros.bas_arity':
                    text = 'A wrong number of arguments was provided to a macro';
                    break;
                case 'client.003-PsddFKi3.michelson.macros.sequence_expected':
                    text = 'An macro expects a sequence, but a sequence was not provided';
                    break;
                case 'client.003-PsddFKi3.michelson.macros.unexpected_annotation':
                    text = 'A macro had an annotation, but no annotation was permitted on this macro.';
                    break;
                case 'failure':
                    text = 'Unclassified error';
                    break;
                case 'invalid_remote_signer':
                    text = 'The provided remote signer is invalid.';
                    break;
                case 'proto.003-PsddFKi3.InconsistentTypesTypeError':
                    text = 'This is the basic type clash error, that appears in several places where the equality of two types have to be proven, it is always accompanied with another error that provides more context.';
                    break;
                case 'proto.003-PsddFKi3.badContractParameter':
                    text = 'Either no parameter was supplied to a contract with a non-unit parameter type, a non-unit parameter was passed to an account, or a parameter was supplied of the wrong type';
                    break;
                case 'proto.003-PsddFKi3.badReturnTypeError':
                    text = 'Unexpected stack at the end of a lambda or script.';
                    break;
                case 'proto.003-PsddFKi3.badStackItemTypeError':
                    text = 'The type of a stack item is unexpected (this error is always accompanied by a more precise one).';
                    break;
                case 'proto.003-PsddFKi3.badStackTypeError':
                    text = 'The stack has an unexpected length or contents.';
                    break;
                case 'proto.003-PsddFKi3.baking.insufficient_proof_of_work':
                    text = 'The blocks proof-of-work stamp is insufficient';
                    break;
                case 'proto.003-PsddFKi3.baking.invalid_block_signature':
                    text = 'A block was not signed with the expected private key.';
                    break;
                case 'proto.003-PsddFKi3.baking.invalid_fitness_gap':
                    text = 'The gap of fitness is out of bounds';
                    break;
                case 'proto.003-PsddFKi3.baking.invalid_signature':
                    text = 'The blocks proof-of-work stamp is insufficient';
                    break;
                case 'proto.003-PsddFKi3.baking.timestamp_too_early':
                    text = 'The block timestamp is before the first slot for this baker at this level';
                    break;
                case 'proto.003-PsddFKi3.baking.unexpected_endorsement':
                    text = 'The operation is signed by a delegate without endorsement rights.';
                    break;
                case 'proto.003-PsddFKi3.block.inconsistent_double_baking_evidence':
                    text = 'A double-baking evidence is inconsistent  (two distinct delegates)';
                    break;
                case 'proto.003-PsddFKi3.block.inconsistent_double_endorsement_evidence':
                    text = 'A double-endorsement evidence is inconsistent  (two distinct delegates)';
                    break;
                case 'proto.003-PsddFKi3.block.invalid_commitment':
                    text = 'The block header has invalid commitment.';
                    break;
                case 'proto.003-PsddFKi3.block.invalid_double_baking_evidence':
                    text = 'A double-baking evidence is inconsistent  (two distinct level)';
                    break;
                case 'proto.003-PsddFKi3.block.invalid_double_endorsement_evidence':
                    text = 'A double-endorsement evidence is malformed';
                    break;
                case 'proto.003-PsddFKi3.block.multiple_revelation':
                    text = 'A manager operation should not contain more than one revelation';
                    break;
                case 'proto.003-PsddFKi3.block.outdated_double_baking_evidence':
                    text = 'A double-baking evidence is outdated.';
                    break;
                case 'proto.003-PsddFKi3.block.outdated_double_endorsement_evidence':
                    text = 'A double-endorsement evidence is outdated.';
                    break;
                case 'proto.003-PsddFKi3.block.too_early_double_baking_evidence':
                    text = 'A double-baking evidence is in the future';
                    break;
                case 'proto.003-PsddFKi3.block.too_early_double_endorsement_evidence':
                    text = 'A double-endorsement evidence is in the future';
                    break;
                case 'proto.003-PsddFKi3.block.unrequired_double_baking_evidence':
                    text = 'A double-baking evidence is unrequired';
                    break;
                case 'proto.003-PsddFKi3.block.unrequired_double_endorsement_evidence':
                    text = 'A double-endorsement evidence is unrequired';
                    break;
                case 'proto.003-PsddFKi3.cannotSerializeError':
                    text = 'The error was too big to be serialized with the provided gas';
                    break;
                case 'proto.003-PsddFKi3.cannotSerializeFailure':
                    text = 'Argument of FAILWITH was too big to be serialized with the provided gas';
                    break;
                case 'proto.003-PsddFKi3.cannotSerializeLog':
                    text = 'Execution trace with stacks was to big to be serialized with the provided gas';
                    break;
                case 'proto.003-PsddFKi3.cannotSerializeStorage':
                    text = 'The returned storage was too big to be serialized with the provided gas';
                    break;
                case 'proto.003-PsddFKi3.comparableTypeExpectedTypeError':
                    text = 'A non comparable type was used in a place where only comparable types are accepted.';
                    break;
                case 'proto.003-PsddFKi3.context.failed_to_decode_parameter':
                    text = 'Unexpected JSON object.';
                    break;
                case 'proto.003-PsddFKi3.context.failed_to_parse_parameter':
                    text = 'The protocol parameters are not valid JSON.';
                    break;
                case 'proto.003-PsddFKi3.context.storage_error':
                    text = 'An error that should never happen unless something has been deleted or corrupted in the database.';
                    break;
                case 'proto.003-PsddFKi3.contract.balance_too_low':
                    text = 'An operation tried to spend more tokens than the contract has';
                    break;
                case 'proto.003-PsddFKi3.contract.cannot_pay_storage_fee':
                    text = 'The storage fee is higher than the contract balance';
                    break;
                case 'proto.003-PsddFKi3.contract.counter_in_the_future':
                    text = 'An operation assumed a contract counter in the future';
                    break;
                case 'proto.003-PsddFKi3.contract.counter_in_the_past':
                    text = 'An operation assumed a contract counter in the past';
                    break;
                case 'proto.003-PsddFKi3.contract.empty_transaction':
                    text = 'Forbidden to credit 0ꜩ to a contract without code.';
                    break;
                case 'proto.003-PsddFKi3.contract.failure':
                    text = 'Unexpected contract storage error';
                    break;
                case 'proto.003-PsddFKi3.contract.invalid_contract_notation':
                    text = 'A malformed contract notation was given to an RPC or in a script.';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.consume_roll_change':
                    text = 'Change is not enough to consume a roll.';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.inconsistent_hash':
                    text = 'A revealed manager public key is inconsistent with the announced hash';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.inconsistent_public_key':
                    text = 'A provided manager public key is different with the public key stored in the contract';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.no_roll_for_delegate':
                    text = 'Delegate has no roll.';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.no_roll_snapshot_for_cycle':
                    text = 'A snapshot of the rolls distribution does not exist for this cycle.';
                    break;
                case 'proto.003-PsddFKi3.contract.manager.unregistered_delegate':
                    text = 'A contract cannot be delegated to an unregistered delegate';
                    break;
                case 'proto.003-PsddFKi3.contract.non_existing_contract':
                    text = 'A contract handle is not present in the context (either it never was or it has been destroyed)';
                    break;
                case 'proto.003-PsddFKi3.contract.previously_revealed_key':
                    text = 'One tried to revealed twice a manager public key';
                    break;
                case 'proto.003-PsddFKi3.contract.undelegatable_contract':
                    text = 'Tried to delegate an implicit contract or a non delegatable originated contract';
                    break;
                case 'proto.003-PsddFKi3.contract.unrevealed_key':
                    text = 'One tried to apply a manager operation without revealing the manager public key';
                    break;
                case 'proto.003-PsddFKi3.contract.unspendable_contract':
                    text = 'An operation tried to spend tokens from an unspendable contract';
                    break;
                case 'proto.003-PsddFKi3.delegate.already_active':
                    text = 'Useless delegate reactivation';
                    break;
                case 'proto.003-PsddFKi3.delegate.balance_too_low_for_deposit':
                    text = 'Cannot freeze deposit when the balance is too low';
                    break;
                case 'proto.003-PsddFKi3.delegate.empty_delegate_account':
                    text = 'Cannot register a delegate when its implicit account is empty';
                    break;
                case 'proto.003-PsddFKi3.delegate.no_deletion':
                    text = 'Tried to unregister a delegate';
                    break;
                case 'proto.003-PsddFKi3.delegate.unchanged':
                    text = 'Contract already delegated to the given delegate';
                    break;
                case 'proto.003-PsddFKi3.duplicateMapKeys':
                    text = 'Map literals cannot contain duplicated keys';
                    break;
                case 'proto.003-PsddFKi3.duplicateScriptField':
                    text = 'When parsing script, a field was found more than once';
                    break;
                case 'proto.003-PsddFKi3.duplicateSetValuesInLiteral':
                    text = 'Set literals cannot contain duplicate elements, but a duplicae was found while parsing.';
                    break;
                case 'proto.003-PsddFKi3.empty_proposal':
                    text = 'Proposal lists cannot be empty.';
                    break;
                case 'proto.003-PsddFKi3.failNotInTailPositionTypeError':
                    text = 'There is non trivial garbage code after a FAIL instruction.';
                    break;
                case 'proto.003-PsddFKi3.gas_exhausted.block':
                    text = 'The sum of gas consumed by all the operations in the block exceeds the hard gas limit per block';
                    break;
                case 'proto.003-PsddFKi3.gas_exhausted.init_deserialize':
                    text = 'Gas limit was not high enough to deserialize the transaction parameters or origination script code or initial storage, making the operation impossible to parse within the provided gas bounds.';
                    break;
                case 'proto.003-PsddFKi3.gas_exhausted.operation':
                    text = 'A script or one of its callee took more time than the operation said it would';
                    break;
                case 'proto.003-PsddFKi3.gas_limit_too_high':
                    text = 'A transaction tried to exceed the hard limit on gas';
                    break;
                case 'proto.003-PsddFKi3.illFormedTypeTypeError':
                    text = 'The toplevel error thrown when trying to parse a type expression (always followed by more precise errors).';
                    break;
                case 'proto.003-PsddFKi3.illTypedContractTypeError':
                    text = 'The toplevel error thrown when trying to typecheck a contract code against given input, output and storage types (always followed by more precise errors).';
                    break;
                case 'proto.003-PsddFKi3.illTypedDataTypeError':
                    text = 'The toplevel error thrown when trying to typecheck a data expression against a given type (always followed by more precise errors).';
                    break;
                case 'proto.003-PsddFKi3.implicit.empty_implicit_contract':
                    text = 'No manager operations are allowed on an empty implicit contract.';
                    break;
                case 'proto.003-PsddFKi3.inconsistentAnnotations':
                    text = 'The annotations on two types could not be merged';
                    break;
                case 'proto.003-PsddFKi3.inconsistentFieldAnnotations':
                    text = 'The specified field does not match the field annotation in the type';
                    break;
                case 'proto.003-PsddFKi3.inconsistentStackLengthsTypeError':
                    text = 'A stack was of an unexpected length (this error is always in the context of a located error).';
                    break;
                case 'proto.003-PsddFKi3.inconsistentTypeAnnotations':
                    text = 'The two types contain annotations that do not match';
                    break;
                case 'proto.003-PsddFKi3.incorrect_priority':
                    text = 'Block priority must be non-negative.';
                    break;
                case 'proto.003-PsddFKi3.internal_operation_replay':
                    text = 'An internal operation was emitted twice by a script';
                    break;
                case 'proto.003-PsddFKi3.invalidArityTypeError':
                    text = 'In a script or data expression, a primitive was applied to an unsupported number of arguments.';
                    break;
                case 'proto.003-PsddFKi3.invalidConstantTypeError':
                    text = 'A data expression was invalid for its expected type.';
                    break;
                case 'proto.003-PsddFKi3.invalidContractTypeError':
                    text = 'A script or data expression references a contract that does not exist or assumes a wrong type for an existing contract.';
                    break;
                case 'proto.003-PsddFKi3.invalidExpressionKindTypeError':
                    text = 'In a script or data expression, an expression was of the wrong kind (for instance a string where only a primitive applications can appear).';
                    break;
                case 'proto.003-PsddFKi3.invalidIterBody':
                    text = 'The body of an ITER instruction must result in the same stack type as before the ITER.';
                    break;
                case 'proto.003-PsddFKi3.invalidMapBlockFail':
                    text = 'FAIL cannot be the only instruction in the body. The propper type of the return list cannot be inferred.';
                    break;
                case 'proto.003-PsddFKi3.invalidMapBody':
                    text = 'The body of a map block did not match the expected type';
                    break;
                case 'proto.003-PsddFKi3.invalidPrimitiveNameCaseTypeError':
                    text = 'In a script or data expression, a primitive name is neither uppercase, lowercase or capitalized.';
                    break;
                case 'proto.003-PsddFKi3.invalidPrimitiveNameTypeErro':
                    text = 'In a script or data expression, a primitive name is unknown or has a wrong case.';
                    break;
                case 'proto.003-PsddFKi3.invalidPrimitiveNamespaceTypeError':
                    text = 'In a script or data expression, a primitive was of the wrong namespace.';
                    break;
                case 'proto.003-PsddFKi3.invalidPrimitiveTypeError':
                    text = 'In a script or data expression, a primitive was unknown.';
                    break;
                case 'proto.003-PsddFKi3.invalid_arg':
                    text = 'Negative multiple of periods are not allowed.';
                    break;
                case 'proto.003-PsddFKi3.invalid_binary_format':
                    text = 'Could not deserialize some piece of data from its binary representation';
                    break;
                case 'proto.003-PsddFKi3.invalid_fitness':
                    text = 'Fitness representation should be exactly 8 bytes long.';
                    break;
                case 'proto.003-PsddFKi3.invalid_proposal':
                    text = 'Ballot provided for a proposal that is not the current one.';
                    break;
                case 'proto.003-PsddFKi3.malformed_period':
                    text = 'Period is negative.';
                    break;
                case 'proto.003-PsddFKi3.missingScriptField':
                    text = 'When parsing script, a field was expected, but not provided';
                    break;
                case 'proto.003-PsddFKi3.nonce.previously_revealed':
                    text = 'Duplicated revelation for a nonce.';
                    break;
                case 'proto.003-PsddFKi3.nonce.too_early_revelation':
                    text = 'Nonce revelation happens before cycle end';
                    break;
                case 'proto.003-PsddFKi3.nonce.too_late_revelation':
                    text = 'Nonce revelation happens too late';
                    break;
                case 'proto.003-PsddFKi3.nonce.unexpected':
                    text = 'The provided nonce is inconsistent with the committed nonce hash.';
                    break;
                case 'proto.003-PsddFKi3.operation.cannot_parse':
                    text = 'The operation is ill-formed or for another protocol version';
                    break;
                case 'proto.003-PsddFKi3.operation.duplicate_endorsement':
                    text = 'Two endorsements received from same delegate';
                    break;
                case 'proto.003-PsddFKi3.operation.invalid_activation':
                    text = 'The given key and secret do not correspond to any existing preallocated contract';
                    break;
                case 'proto.003-PsddFKi3.operation.invalid_endorsement_level':
                    text = 'The level of an endorsement is inconsistent with the  provided block hash.';
                    break;
                case 'proto.003-PsddFKi3.operation.invalid_signature':
                    text = 'The operation signature is ill-formed or has been made with the wrong public key';
                    break;
                case 'proto.003-PsddFKi3.operation.missing_signature':
                    text = 'The operation is of a kind that must be signed, but the signature is missing';
                    break;
                case 'proto.003-PsddFKi3.operation.wrong_endorsement_predecessor':
                    text = 'Trying to include an endorsement in a block that is not the successor of the endorsed one';
                    break;
                case 'proto.003-PsddFKi3.operation.wrong_voting_period':
                    text = 'Trying to onclude a proposal or ballot meant for another voting period';
                    break;
                case 'proto.003-PsddFKi3.scriptOverflowRuntimeError':
                    text = 'A FAIL instruction was reached due to the detection of an overflow';
                    break;
                case 'proto.003-PsddFKi3.scriptRejectedRuntimeError':
                    text = 'A FAILWITH instruction was reached';
                    break;
                case 'proto.003-PsddFKi3.scriptRuntimeError':
                    text = 'Toplevel error for all runtime script errors';
                    break;
                case 'proto.003-PsddFKi3.seed.unknown_seed':
                    text = 'The requested seed is not available';
                    break;
                case 'proto.003-PsddFKi3.selfInLambda':
                    text = 'A SELF instruction was encountered in a lambda expression.';
                    break;
                case 'proto.003-PsddFKi3.storage_exhausted.operation':
                    text = 'A script or one of its callee wrote more bytes than the operation said it would';
                    break;
                case 'proto.003-PsddFKi3.storage_limit_too_high':
                    text = 'A transaction tried to exceed the hard limit on storage';
                    break;
                case 'proto.003-PsddFKi3.tez.addition_overflow':
                    text = 'An addition of two tez amounts overflowed';
                    break;
                case 'proto.003-PsddFKi3.tez.invalid_divisor':
                    text = 'Multiplication of a tez amount by a non positive integer';
                    break;
                case 'proto.003-PsddFKi3.tez.multiplication_overflow':
                    text = 'A multiplication of a tez amount by an integer overflowed';
                    break;
                case 'proto.003-PsddFKi3.tez.negative_multiplicator':
                    text = 'Multiplication of a tez amount by a negative integer';
                    break;
                case 'proto.003-PsddFKi3.tez.subtraction_underflow':
                    text = 'An subtraction of two tez amounts underflowed';
                    break;
                case 'proto.003-PsddFKi3.timestamp_add':
                    text = 'Overflow when adding timestamps.';
                    break;
                case 'proto.003-PsddFKi3.too_many_internal_operations':
                    text = 'A transaction exceeded the hard limit of internal operations it can emit';
                    break;
                case 'proto.003-PsddFKi3.too_many_proposals':
                    text = 'The delegate reached the maximum number of allowed proposals.';
                    break;
                case 'proto.003-PsddFKi3.typeTooLarge':
                    text = 'An instruction generated a type larger than the limit.';
                    break;
                case 'proto.003-PsddFKi3.unauthorized_ballot':
                    text = 'The delegate provided for the ballot is not in the voting listings.';
                    break;
                case 'proto.003-PsddFKi3.unauthorized_proposal':
                    text = 'The delegate provided for the proposal is not in the voting listings.';
                    break;
                case 'proto.003-PsddFKi3.undefinedBinopTypeError':
                    text = 'A binary operation is called on operands of types over which it is not defined.';
                    break;
                case 'proto.003-PsddFKi3.undefinedUnopTypeError':
                    text = 'A unary operation is called on an operand of type over which it is not defined.';
                    break;
                case 'proto.003-PsddFKi3.undefined_operation_nonce':
                    text = 'An origination was attemped out of the scope of a manager operation';
                    break;
                case 'proto.003-PsddFKi3.unexpectedAnnotation':
                    text = 'A node in the syntax tree was impropperly annotated';
                    break;
                case 'proto.003-PsddFKi3.unexpectedBigMap':
                    text = 'When parsing script, a big_map type was found somewhere else than in the left component of the toplevel storage pair.';
                    break;
                case 'proto.003-PsddFKi3.unexpectedOperation':
                    text = 'When parsing script, a operation type was found in the storage or parameter field.';
                    break;
                case 'proto.003-PsddFKi3.unexpected_ballot':
                    text = 'Ballot recorded outside of a voting period.';
                    break;
                case 'proto.003-PsddFKi3.unexpected_level':
                    text = 'Level must be non-negative.';
                    break;
                case 'proto.003-PsddFKi3.unexpected_nonce_length':
                    text = 'Nonce length is incorrect.';
                    break;
                case 'proto.003-PsddFKi3.unexpected_proposal':
                    text = 'Proposal recorded outside of a proposal period.';
                    break;
                case 'proto.003-PsddFKi3.ungroupedAnnotations':
                    text = 'Annotations of the same kind must be grouped';
                    break;
                case 'proto.003-PsddFKi3.unknownPrimitiveNameTypeError':
                    text = 'In a script or data expression, a primitive was unknown.';
                    break;
                case 'proto.003-PsddFKi3.unmatchedBranchesTypeError':
                    text = 'At the join point at the end of two code branches the stacks have inconsistent lengths or contents.';
                    break;
                case 'proto.003-PsddFKi3.unorderedMapLiteral':
                    text = 'Map keys must be in strictly increasing order';
                    break;
                case 'proto.003-PsddFKi3.unorderedSetLiteral':
                    text = 'Set values must be in strictly increasing order';
                    break;
                case 'raw_context.invalid_depth':
                    text = 'The raw context extraction depth argument must be positive.';
                    break;
                case 'signer.decoding_error':
                    text = 'Error while decoding a remote signer message';
                    break;
                case 'signer.encoding_error':
                    text = 'Error while encoding a remote signer message';
                    break;
                case 'signer.ledger':
                    text = 'Error when communication to a Ledger Nano S device';
                    break;
                case 'unix_error':
                    text = 'An unhandled unix exception';
                    break;
                case 'utils.Timeout':
                    text = 'Timeout';
                    break;
                default:
                    text = error;
                    break;
            }
            return text;
        },
        
        findErrors: function (transaction) {
            function findVal(object, key) {
                var value;
                Object.keys(object).some(function (k) {
                    if (k === key) {
                        value = object[k];
                        return true;
                    }
                    if (object[k] && typeof object[k] === 'object') {
                        value = findVal(object[k], key);
                        return value !== undefined;
                    }
                });
                return value;
            }
            
            var errors = findVal(transaction, 'errors');
            if (!errors) {
                errors = findVal(transaction, 'error')
            }
            return errors;
        },
        decodeAddress: function (hex) {
            var address, prefix;
            if (hex.substring(0, 2) == "00") {
                if (hex.substring(2, 4) == "00") prefix = eztz.prefix.tz1;
                if (hex.substring(2, 4) == "01") prefix = eztz.prefix.tz2;
                if (hex.substring(2, 4) == "02") prefix = eztz.prefix.tz3;
                address = hex.substring(4, 44);
            } else if (hex.substring(0, 2) == "01") {
                prefix = eztz.prefix.KT;
                address = hex.substring(2, 42);
            }
            return eztz.utility.b58cencode(eztz.utility.hex2buf(address), prefix);
        },
    
        //toDo какой то баг eztz
        prepareErrorResponse: function (response) {
            
            if (typeof response == 'string') {
                response = JSON.parse(response);
            }
            var errors = this.findErrors(response);
            
            if (typeof errors == 'string') {
                return errors;
            }
            
            if (!errors) {
                errors = response;
            }
            
            if (Array.isArray(errors)) {
                var resultErrors = [];
                var self = this;
                errors.forEach(function (error) {
                    if (error.with) {
                        resultErrors.push(error.with.string)
                    } else {
                        resultErrors.push(self.decodeError(error.id))
                    }
                })
                return resultErrors.pop();
            }
        }
    }
}]);
